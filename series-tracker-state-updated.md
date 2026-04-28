# Series Tracker — Estado del proyecto

## Stack

- React Native + Expo SDK 55 (Managed workflow)
- React Navigation (native-stack + bottom-tabs) — NO Expo Router
- styled-components/native con ThemeProvider
- i18next + react-i18next + expo-localization (es + en)
- TypeScript
- App llamada: **Binged**

## Estructura de carpetas

```
src/
  components/
    Text/                  ← AppText (componente base de texto con variantes)
    Button/                ← componente Button reutilizable con variant y isLoading
    GridBackground/        ← fondo SVG (grid oscuro + máscara radial), requiere react-native-svg
    TitlesContainer/       ← SafeAreaView absoluta en top para AppName + SubTitle
    AddShowModal/          ← modal para añadir/editar series Y películas
    SearchResultCard/      ← card de resultado de búsqueda (series y películas)
    SeriesCard/            ← card de serie/película en la lista del usuario
    SeriesList/            ← lista filtrada por status con pills
    MoviesList/            ← lista filtrada por status con pills (igual que SeriesList)
    Snackbar/              ← CustomSnackbar con variantes success/error
  context/
    AuthContext.tsx        ← AuthProvider + useAuth()
    SeriesContext.tsx      ← SeriesProvider + useSeries()
    MoviesContext.tsx      ← MoviesProvider + useMovies() ← NUEVO
  i18n/
    index.ts
    locales/es.ts
    locales/en.ts
  lib/
    supabase.ts
    tmdb.ts
  navigation/
    index.tsx · constants.ts · service.ts · types.ts · MainNavigator.tsx · useAppNavigation.ts
  services/
    userSeries.ts          ← getUserSeries, addUserSeries, deleteUserSeries
    userMovies.ts          ← getUserMovies, addUserMovie, deleteUserMovie ← NUEVO
  theme/
    colors.ts · types.ts · styled.d.ts · index.ts · statusColors.ts
  types/
    database.types.ts      ← generado con CLI de Supabase (incluye user_movies)
    app.types.ts           ← tipos manuales: SeriesStatus, Profile, UserSeries, UserMovie, etc. ← NUEVO
  views/
    login/ · register/ · home/ · search/ · detail/ · profile/
App.tsx                    ← ThemeProvider + AuthProvider + SeriesProvider + MoviesProvider
```

## Convenciones de código

- Cada view y component tiene su carpeta con: index.tsx, styles.ts, types.ts, viewmodel.ts
- viewmodel.ts exporta `useViewModel = () => { return {} }`
- Estilos con styled-components/native, usando siempre el theme
- Textos siempre con `t('clave')` de useTranslation, nunca strings literales
- Navegación con ScreenType enum, nunca strings literales
- Componentes de texto: `styled(AppText).attrs({ variant: 'title-1' })` — NUNCA font-size literal
- Tokens de color siempre semánticos

## Path aliases (babel + tsconfig)

```
@components  →  src/components
@theme       →  src/theme
@views       →  src/views
@navigation  →  src/navigation
@context     →  src/context
@lib         →  src/lib
@i18n        →  src/i18n
@types       →  src/types
@            →  src (comodín)
```

## Tipos TypeScript — separación database.types / app.types

- `src/types/database.types.ts`: generado con CLI de Supabase. NO tocar a mano.
  - Regenerar: `npx supabase gen types typescript --project-id kbuoushbzsipiriozlsr > src/types/database.types.ts`
  - Incluye: profiles, user_series, user_movies (con Row/Insert/Update)
- `src/types/app.types.ts`: tipos manuales del dominio. Importar desde aquí.
  - Contiene: `SeriesStatus`, `Profile`, `UserSeries`, `InsertUserSeries`, `UpdateUserSeries`, `UserMovie`, `InsertUserMovie`, `UpdateUserMovie`
- Al regenerar `database.types.ts` ya NO hay que reañadir bloque manual (está en `app.types.ts`)
- **REGLA**: importar siempre `SeriesStatus`, `UserSeries`, etc. desde `@/types/app.types`, NO desde `database.types`

## Supabase

- Proyecto: kbuoushbzsipiriozlsr
- Tablas activas:
  - `profiles`: id (FK→auth.users), username, first_name, last_name, avatar_url, created_at
  - `user_series`: id, user_id, tmdb_series_id, series_name, poster_path, status, rating, notes, current_season, current_episode, vote_average, number_of_seasons, number_of_episodes, created_at, updated_at
  - `user_movies`: id, user_id, tmdb_movie_id, movie_name, poster_path, status, rating, notes, runtime, vote_average, created_at, updated_at ← NUEVO
- RLS activo en todas las tablas
- **PENDIENTE**: trigger `on_user_movies_updated` para actualizar updated_at automáticamente (igual que user_series)
- **PENDIENTE**: verificar que RLS de user_movies tiene políticas insert/select/update/delete (solo propio)
- Migración activa: `20260412150107_add_tmdb_metadata_to_user_series.sql`, `20260413122749_change_rating_type_to_numeric.sql`

## TMDB — tipos y funciones

- `TmdbSeries`, `TmdbSeriesDetail` — endpoint /search/tv y /tv/{id}
- `TmdbMovie`, `TmdbMovieDetail` — endpoint /search/movie y /movie/{id}
- `SearchSeries = TmdbSeries & { media_type: 'series' }` ← NUEVO
- `SearchMovie = TmdbMovie & { media_type: 'movie' }` ← NUEVO
- `SearchResult = SearchSeries | SearchMovie` — Discriminated Union ← NUEVO
- `searchSeries(query)` → `Promise<SearchSeries[]>` (añade media_type con map)
- `searchMovies(query)` → `Promise<SearchMovie[]>` (añade media_type con map) ← NUEVO
- `getSerieById(id)` → `Promise<TmdbSeriesDetail>`
- `getMovieById(id)` → `Promise<TmdbMovieDetail>`
- `getPosterUrl()`, `getBackdropUrl()` — helpers

## Search view — estado actual (ACTUALIZADO)

- Filtro de tipo con pills: [Series] [Películas] — usando `mediaType: 'series' | 'movie'`
- Cuando cambia el filtro, los resultados se limpian y el placeholder cambia
- `searchSeries()` o `searchMovies()` según `mediaType`
- `FlatList<SearchResult>` — acepta ambos tipos
- `SearchResultCard` recibe `item: SearchResult` — discrimina por `media_type` para nombre y fecha
- Modal add/edit: `onConfirm` llama a `addSeries` o `addMovie` según `mediaType`
- `onRemove`: llama a `removeSeries` o `removeMovie` según `mediaType`
- `initialStatus` e `initialRating` del modal consultan `userSeriesMap` o `userMoviesMap` según `mediaType`
- `onRemove` del modal también discrimina por `mediaType` para llamar al handler correcto
- i18n: `search.filter.series`, `search.filter.movies`, `search.placeholderMovie`
- **Bug fix**: `key={selectedItem?.id ?? 'empty'}` en `AddShowModal` — evita que el modal conserve el estado de un item anterior cuando `initialStatus` no cambia entre aperturas

## SearchResultCard — estado actual (ACTUALIZADO)

- Props: `item: SearchResult`, `userSeriesMap`, `userMoviesMap`, `id`
- Discrimina por `item.media_type` para mostrar nombre (`name` vs `title`) y año (`first_air_date` vs `release_date`)
- `useViewModel(mediaType)` navega al detalle con `type: 'series' | 'movie'` correcto
- `userStatus` derivado antes del JSX: `item.media_type === 'series' ? userSeriesMap[item.id]?.status : userMoviesMap[item.id]?.status`
- Status badge y `AddButton` (edit vs add) funcionan correctamente para series Y películas

## MoviesContext — NUEVO

- `src/context/MoviesContext.tsx`: MoviesProvider + useMovies()
  - `userMovies: UserMovie[]` — lista completa de películas del usuario
  - `userMoviesMap: Record<number, UserMovie>` — diccionario tmdb_movie_id → UserMovie para lookups rápidos
  - `isLoading: boolean`
  - `addMovie(data: InsertUserMovie)` — upsert + refresh
  - `deleteMovie(tmdbMovieId)` — delete + refresh
  - `refreshMovies()` — refetch manual
- Registrado en `App.tsx` dentro de `SeriesProvider`
- Patrón idéntico a `SeriesContext` (incluido el `reduce` para el mapa)

## MoviesList — ACTUALIZADO

- Ahora tiene pills de filtro por status (igual que SeriesList)
- Filtra `userMovies` por `activeStatus`
- `statusCountMap` calculado localmente
- Renderiza `SeriesCard` con props mapeadas desde `UserMovie`

## SeriesCard — ACTUALIZADO

- `number_of_seasons` y `number_of_episodes` ahora opcionales (`?`)
- `type: 'series' | 'movie'` — usado en el viewmodel para navegar al detalle correcto
- Las películas no pasan seasons/episodes → MetaRow no se renderiza (ya había guard `hasProgress`)

## Detail view — ACTUALIZADO

- `handleAddSeries` ahora bifurca según `type`:
  - `'series'` → `addSeries()` (SeriesContext) → guarda en `user_series`
  - `'movie'` → `addMovie()` (MoviesContext) → guarda en `user_movies`
- `handleRemoveSeries` ahora bifurca según `type`:
  - `'series'` → `deleteSeries()`
  - `'movie'` → `deleteMovie()`
- `userStatus` derivado en viewmodel: `userSeriesMap[tmdbId]?.status` o `userMoviesMap[tmdbId]?.status` según `type`
- `initialRating` del modal: `userSeriesMap[tmdbId]?.rating` o `userMoviesMap[tmdbId]?.rating` según `type`
- `userSeriesMap` y `userMoviesMap` exportados desde el viewmodel para uso en el index
- Mensajes i18n correctos: `commonSuccess.Movie.Added/Removed`, `commonErrors.Movie.*`

## i18n — ACTUALIZADO

- Nuevas claves en es.ts y en.ts:
  - `commonErrors.Movie.{SearchingError|AddingError|RemovingError}`
  - `commonSuccess.Movie.{Added|Removed}`
  - `search.filter.{series|movies}`
  - `search.placeholderMovie`

## App.tsx — providers

```tsx
<AuthProvider>
  <SeriesProvider>
    <MoviesProvider>
      <AppNavigator />
    </MoviesProvider>
  </SeriesProvider>
</AuthProvider>
```

## Seguridad y Git

- Branch protection activa en `main`
- Husky + Commitlint activos
- Formato commits: `tipo(scope): descripción`

## Flujo de trabajo

```bash
git checkout -b feat/nombre-rama
# commits con formato convencional
git push origin feat/nombre-rama
# PR en GitHub → merge
```

---

## Profile view — estado actual

- `HeaderSection`: avatar con iniciales, nombre completo (`userName` del AuthContext), email
- `EditProfile` → navega a `editProfile` view (ScreenType.EDIT_PROFILE)
- `EditProfile view`: formulario con `first_name` + `last_name`, guarda en Supabase `profiles` vía `updateUser()`, refresca el perfil con `refreshProfile()`, vuelve atrás tras 1500ms
- `AuthContext` expone: `userFirstName`, `userLastName`, `userName` (concatenado), `userEmail`, `refreshProfile`
- **Opciones con onPress vacío** (solo UI, sin lógica): Notificaciones, Privacidad y Seguridad
- **Idioma eliminado** del perfil — la app ya detecta el idioma del dispositivo con `expo-localization`, no tiene sentido sobreescribirlo
- **Funcional**: Cerrar sesión (`signOut`), Eliminar cuenta (`deleteUser` + `signOut`)

### ✅ Implementable en Profile

- **Privacidad y Seguridad** (`ShieldIcon`): abre URL de política de privacidad con `Linking.openURL()` — ver plan de publicación abajo
- **Estadísticas básicas**: usar `userSeries` y `userMovies` de los contexts — contar por status, calcular horas con `runtime` de películas. Todo ya está en memoria, solo es UI
- **Username editable**: el campo `username` ya existe en la tabla `profiles` — ampliar `editProfile` para incluirlo. Pendiente: validar unicidad (requiere query extra o constraint en Supabase)

### ❌ No implementable (o muy costoso) con el stack actual

- **Notificaciones push** (`BellIcon`): requiere Expo Notifications + backend para scheduling. Supabase no tiene cron en plan free. No viable ahora
- **Avatar/foto de perfil**: `avatar_url` existe en la tabla pero falta flujo upload con Supabase Storage + picker
- **Cambio de contraseña**: posible con `supabase.auth.updateUser({ password })` pero requiere flujo de verificación previo. No prioritario
- **Confirmación de email en registro**: posible pero requiere cambios en UX del register y política de Supabase (actualmente desactivada en dev)

---

## PENDIENTE — próximas sesiones

### 🔴 Urgente / bugs conocidos

- **RLS user_movies**: verificar que Supabase tiene políticas insert/select/update/delete para `user_movies` (solo propio). También el trigger `on_user_movies_updated` para `updated_at`

### 🟡 Refactor pendiente (commit limpio, no mezclar con features)

- ~~**Renombrar `SeriesStatus` → `ItemStatus`**~~ ✅ COMPLETADO — renombrado a `ItemStatus` en todos los archivos

### � Plan de publicación (obligatorio antes de publicar)

1. **Crear política de privacidad** — usar generador online (privacypolicygenerator.info). Incluir: datos que se recogen (email, nombre), para qué se usan, que se usa Supabase, cómo eliminar la cuenta, contacto RGPD
2. **Alojar la política** — GitHub Pages (gratuito, repositorio público o privado). Crear repo `mywatchlist-privacy` con un `index.html` o `README.md` y activar GitHub Pages en settings
3. **Implementar en la app** — en `profile/viewmodel.ts` añadir `onPrivacyPolicy = () => Linking.openURL('https://tuusuario.github.io/mywatchlist-privacy')`. En `profile/index.tsx` el `OptionRow` de `ShieldIcon` llama a `onPrivacyPolicy`
4. **Pegar la URL** en la ficha de Google Play Console y App Store Connect al publicar

> `Linking` viene de `react-native`, no necesita instalación. Importar: `import { Linking } from 'react-native'`

### �🟢 Features nuevas

- **Estadísticas en Profile**: conteo de series/pelis por status + horas totales (usar `runtime` de `user_movies`). Todo disponible en los contexts
- **Username editable**: ampliar `editProfile` view para incluir el campo `username` de `profiles`
- **Progreso avanzado**: UI para editar `notes`, `current_season`, `current_episode` en series
- **Producción auth**: activar confirmación de email en Supabase + adaptar UX de registro
- **Avatar/foto de perfil**: `avatar_url` ya existe en `profiles` — pendiente flujo upload con Supabase Storage + picker
- **Tests**: no hay unit/integration/e2e en el repo
- **CI/CD**: no hay pipeline (lint/typecheck/tests) configurado

### 🔵 Deuda técnica conocida

- `TmdbSearchResponse` eliminada de tmdb.ts (bien) — pero `searchSeries` y `searchMovies` usan `any` implícito en el `data` antes del map. Podría hacerse genérico: `type TmdbSearchResponse<T> = { results: T[] }`
- El modal `AddShowModal` muestra estados Watching/Completed/Planned/Dropped para películas. Podría tener estados específicos (ej: "Vista" en lugar de "Completada") si se renuncia el enum a `ItemStatus`
