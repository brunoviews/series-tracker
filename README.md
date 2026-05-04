# Binged

App móvil para hacer seguimiento de series y películas.

**Stack:** React Native + Expo · Supabase · TMDB API

---

## Funcionalidades

- Autenticación con Supabase Auth (registro e inicio de sesión)
- Búsqueda de series y películas vía TMDB
- Biblioteca personal con estados: Viendo, Completado, Pendiente, Abandonado
- Valoraciones y notas personales por título
- Seguimiento de temporada y episodio actual en series
- Trending semanal en la pantalla de inicio
- Perfil editable con eliminación de cuenta

## Tech Stack

| Área           | Tecnología                                    |
| -------------- | --------------------------------------------- |
| Mobile         | React Native 0.83 + Expo SDK 55 (managed)     |
| Lenguaje       | TypeScript 5.9                                |
| Navegación     | React Navigation (native-stack + bottom-tabs) |
| UI             | styled-components/native + react-native-paper |
| Iconos         | phosphor-react-native                         |
| Formularios    | react-hook-form + Zod                         |
| Backend        | Supabase (Auth + PostgreSQL + RLS)            |
| API externa    | TMDB API v3                                   |
| i18n           | i18next + react-i18next + expo-localization   |
| Build / Deploy | EAS Build                                     |

## Estructura del proyecto

```
src/
  components/     # Componentes reutilizables (cada uno con index, styles, types, viewmodel)
  context/        # AuthContext, SeriesContext, MoviesContext
  i18n/           # Configuración i18next y locales (es, en)
  lib/            # supabase.ts, tmdb.ts
  navigation/     # Navegadores, ScreenType enum, tipos de rutas
  services/       # Lógica CRUD contra Supabase (user, userSeries, userMovies)
  theme/          # Tokens de color, tipografía, ThemeProvider
  types/          # app.types.ts (manual), database.types.ts (generado por Supabase)
  views/          # Pantallas organizadas por carpeta (login, register, home, series, movies, search, detail, profile, editProfile)
```

## Setup local

```bash
git clone https://github.com/brunoviews/series-tracker.git
cd series-tracker
npm install
```

Copia `.env.example` a `.env` y rellena los valores:

```bash
cp .env.example .env
```

```
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
EXPO_PUBLIC_TMDB_API_KEY=
EXPO_PUBLIC_PRIVACY_POLICY_URL=
```

Arranca el servidor de desarrollo:

```bash
npx expo start
```

## Comandos útiles

```bash
npm run lint          # ESLint sobre src/**/*.{ts,tsx}
npm run lint:fix      # ESLint con autofix
npm run typecheck     # tsc --noEmit
```

## Base de datos

El schema completo está en `supabase/migrations/00000000000000_baseline_schema.sql`. Aplica esa migración primero en cualquier proyecto nuevo antes del resto de migraciones incrementales.

Tablas principales: `profiles`, `user_series`, `user_movies`. RLS activo en todas ellas.

## Privacidad

Política de privacidad disponible en [brunoviews.github.io/privacy.html](https://brunoviews.github.io/privacy.html).
