# 📺 Series Tracker

App móvil para hacer seguimiento de series y películas. Proyecto de portfolio.

**Stack:** React Native + Expo · Supabase (Auth + PostgreSQL) · TMDB API

---

## Features
- 🔐 Autenticación (login / registro) con Supabase Auth
- 🔍 Búsqueda de series y películas vía TMDB
- 📋 Lista personal con estados: Por ver · Viendo · Completada · Pausada
- 📊 Seguimiento de temporada/episodio actual
- ⭐ Rating y notas personales
- 📈 Estadísticas de consumo

## Tech Stack
| Área | Tecnología |
|------|-----------|
| Mobile | React Native + Expo SDK 51 |
| Navigation | Expo Router (file-based) |
| Backend | Supabase (Auth + PostgreSQL + RLS) |
| API externa | TMDB API v3 |
| Estado global | Zustand |
| HTTP client | Axios |
| Build/Deploy | EAS Build → Google Play |

## Estructura de carpetas
```
series-tracker/
├── app/                    # Rutas (Expo Router)
│   ├── (auth)/             # Login, Register
│   ├── (tabs)/             # Home, Search, MyList, Profile
│   └── series/[id].tsx     # Detalle de serie
├── components/             # Componentes reutilizables
├── hooks/                  # Custom hooks (useAuth, useSeries...)
├── services/               # TMDB API client, Supabase client
├── stores/                 # Zustand stores
├── types/                  # TypeScript types
└── supabase/               # Migrations, schema SQL
```

## Setup
```bash
npx create-expo-app series-tracker --template blank-typescript
cd series-tracker
npm install
```

Copia `.env.example` → `.env` y rellena:
```
EXPO_PUBLIC_SUPABASE_URL=
EXPO_PUBLIC_SUPABASE_ANON_KEY=
EXPO_PUBLIC_TMDB_API_KEY=
```

## Modelo de datos principal (Supabase)
```sql
create table user_series (
  id               uuid primary key default gen_random_uuid(),
  user_id          uuid references auth.users not null,
  tmdb_id          integer not null,
  media_type       text check (media_type in ('tv','movie')) not null,
  title            text not null,
  poster_path      text,
  status           text check (status in ('watchlist','watching','completed','paused')) not null,
  current_season   integer default 1,
  current_episode  integer default 1,
  personal_rating  integer check (personal_rating between 1 and 5),
  notes            text,
  created_at       timestamptz default now(),
  updated_at       timestamptz default now(),
  unique(user_id, tmdb_id, media_type)
);

alter table user_series enable row level security;
create policy "Users can manage their own series"
  on user_series for all
  using (auth.uid() = user_id);
```
