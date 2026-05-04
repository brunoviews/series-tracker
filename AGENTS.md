# Binged — Agent Instructions

Mobile app for tracking series and movies. React Native + Expo (managed workflow), Supabase backend, TMDB API.

## Commands

```bash
npx expo start          # dev server
npm run android         # run on Android
npm run lint            # ESLint on src/**/*.{ts,tsx}
npm run lint:fix        # ESLint autofix
npm run typecheck       # tsc --noEmit (may fail due to tsconfig ignoreDeprecations issue)
```

No test suite exists yet. EAS builds use `eas.json`.

## Architecture

```
src/
  components/   # Reusable UI components
  context/      # React Context providers (Auth, Series, Movies)
  i18n/         # i18next setup + locales (es, en)
  lib/          # supabase.ts, tmdb.ts
  navigation/   # Navigators, ScreenType enum, route types
  services/     # Supabase CRUD (user.ts, userSeries.ts, userMovies.ts)
  theme/        # styled-components theme, colors, statusColors
  types/        # app.types.ts (manual), database.types.ts (Supabase-generated)
  views/        # Screens, one folder per screen
```

## Component/View Conventions

Each component or view folder typically contains:
- `index.tsx` — JSX + rendering only
- `styles.ts` — styled-components styled primitives
- `types.ts` — prop types for this component
- `viewmodel.ts` — `useViewModel` hook: all state, handlers, navigation logic

Keep rendering in `index.tsx` and logic in `viewmodel.ts`. Never mix them.

## Styling

- **styled-components/native** with a global `ThemeProvider`
- Access theme tokens via `useTheme()` from `styled-components/native`
- `DefaultTheme` is extended in `src/theme/styled.d.ts` — no need to import types manually
- Fonts: `DMSerifDisplay_400Regular` for display, `SpaceMono_*` for everything else
- See `src/theme/index.ts` for the full typography/color token set

## Path Aliases

Configured via `babel-plugin-module-resolver`:

| Alias | Path |
|-------|------|
| `@` | `./src` |
| `@components` | `./src/components` |
| `@theme` | `./src/theme` |
| `@navigation` | `./src/navigation` |
| `@views` | `./src/views` |
| `@context` | `./src/context` |
| `@lib` | `./src/lib` |
| `@i18n` | `./src/i18n` |
| `@types` | `./src/types` |
| `@assets` | `./assets` |

Always prefer aliases over relative paths.

## Navigation

- Uses `ScreenType` enum — never use literal strings for screen names
- Auth stack: `Login`, `Register`
- Main stack (after login): `Tabs`, `Detail` (receives `{ tmdbId: number; type: 'series' | 'movie' }`), `EditProfile`
- Tab stack: `Home`, `Series`, `Movies`, `Search`, `Profile`
- See `src/navigation/types.ts` for full param lists

## State & Contexts

App.tsx provider order: `ThemeProvider → PaperProvider → AuthProvider → SeriesProvider → MoviesProvider`

- **AuthContext**: session, profile (`first_name`, `last_name`), `isProfileComplete`, `signOut`, `refreshProfile`
- **SeriesContext**: `userSeries[]`, `userSeriesMap` (keyed by `tmdb_series_id`), `addSeries`, `deleteSeries`, `refreshSeries`
- **MoviesContext**: `userMovies[]`, `userMoviesMap` (keyed by `tmdb_movie_id`), `addMovie`, `deleteMovie`, `refreshMovies`

## Types

- `ItemStatus` enum: `watching | completed | planned | dropped` — import from `@/types/app.types`
- `UserSeries`, `InsertUserSeries`, `UserMovie`, `InsertUserMovie` — from `@/types/app.types`
- `database.types.ts` is Supabase-generated — **do not edit manually**
- Domain types live in `src/types/app.types.ts`

## Supabase

- Client: `src/lib/supabase.ts`
- Tables: `profiles`, `user_series`, `user_movies`
- RPC: `delete_user` (deletes auth.users row for current user)
- RLS is assumed active; policies are not fully captured in local migrations
- Migrations in `supabase/migrations/` do not constitute a full reproducible baseline

## TMDB

- Client: `src/lib/tmdb.ts`
- Helpers: `getPosterUrl(path)`, `getBackdropUrl(path)`
- Search: `searchSeries(query)`, `searchMovies(query)`
- Detail: `getSerieById(id)`, `getMovieById(id)`
- Trending: `getTrendingSeries('week')`, `getTrendingMovies('week')`

## i18n

- All UI strings should use `t('key')` from `react-i18next`
- Add keys to both `src/i18n/locales/es.ts` and `src/i18n/locales/en.ts`
- Some legacy strings in login/register are still hardcoded — don't add more

## Commits

Conventional commits enforced via commitlint: `type(scope): description`

## Key Docs

- [Design system](docs/DESIGN.md)
- [DB guide](docs/guia-bbdd.md)
- [Supabase queries guide](docs/guia-queries-supabase.md)
- [Profile screen notes](docs/PROFILE.md)
- [react-hook-form + zod pattern](docs/register-react-hook-form-zod.md)
