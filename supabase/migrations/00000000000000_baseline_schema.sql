-- =============================================================================
-- BASELINE SCHEMA — Binged
-- =============================================================================
-- Este archivo reconstruye el schema completo desde cero.
-- Aplicar ANTES que cualquier otra migración en un proyecto nuevo.
--
-- NOTAS DE DISEÑO respecto a la BBDD de desarrollo actual:
--   - user_movies.user_id apunta aquí a auth.users(id) con ON DELETE CASCADE.
--     En dev apunta a auth.users(id) sin cascade (FK inconsistente con
--     user_series). Corregido en el baseline. Ver deuda en binged-state.md.
--   - profiles SELECT policy restringida a solo el propio usuario.
--     En dev existe "Profiles are viewable by everyone" (qual: true).
-- =============================================================================


-- -----------------------------------------------------------------------------
-- EXTENSIONES
-- -----------------------------------------------------------------------------
-- pgcrypto está activa en Supabase por defecto; solo se necesita si no lo está.
-- create extension if not exists "pgcrypto";


-- -----------------------------------------------------------------------------
-- TABLA: profiles
-- -----------------------------------------------------------------------------
-- Perfil público del usuario. Se crea automáticamente al registrarse
-- mediante el trigger on_auth_user_created → handle_new_user().
-- -----------------------------------------------------------------------------
create table if not exists public.profiles (
  id          uuid        not null primary key references auth.users(id) on delete cascade,
  username    text        unique,
  first_name  text,
  last_name   text,
  avatar_url  text,
  created_at  timestamptz not null default now()
);

alter table public.profiles enable row level security;

-- Solo el propio usuario puede ver su perfil
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

-- Solo el propio usuario puede actualizar su perfil
create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);


-- -----------------------------------------------------------------------------
-- TABLA: user_series
-- -----------------------------------------------------------------------------
create table if not exists public.user_series (
  id                 uuid        not null default gen_random_uuid() primary key,
  user_id            uuid        not null references auth.users(id) on delete cascade,
  tmdb_series_id     integer     not null,
  series_name        text        not null default '',
  poster_path        text,
  status             text        not null,
  rating             numeric(4, 1),
  notes              text,
  current_season     smallint    default 1,
  current_episode    smallint    default 1,
  vote_average       real,
  number_of_seasons  integer,
  number_of_episodes integer,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now(),

  constraint user_series_user_id_tmdb_series_id_key unique (user_id, tmdb_series_id)
);

alter table public.user_series enable row level security;

create policy "Users can view their own series"
  on public.user_series for select
  using (auth.uid() = user_id);

create policy "Users can insert their own series"
  on public.user_series for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own series"
  on public.user_series for update
  using (auth.uid() = user_id);

create policy "Users can delete their own series"
  on public.user_series for delete
  using (auth.uid() = user_id);


-- -----------------------------------------------------------------------------
-- TABLA: user_movies
-- -----------------------------------------------------------------------------
create table if not exists public.user_movies (
  id             uuid        not null default gen_random_uuid() primary key,
  user_id        uuid        not null references auth.users(id) on delete cascade,
  tmdb_movie_id  integer     not null,
  movie_name     text        not null,
  poster_path    text,
  status         text        not null,
  rating         numeric,
  notes          text,
  vote_average   real,
  runtime        integer,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),

  constraint user_movies_user_id_tmdb_movie_id_key unique (user_id, tmdb_movie_id)
);

alter table public.user_movies enable row level security;

create policy "Allow individual user access"
  on public.user_movies for select
  using (auth.uid() = user_id);

create policy "Allow individual user insert"
  on public.user_movies for insert
  with check (auth.uid() = user_id);

create policy "Allow individual user update"
  on public.user_movies for update
  using (auth.uid() = user_id);

create policy "Allow individual user delete"
  on public.user_movies for delete
  using (auth.uid() = user_id);


-- -----------------------------------------------------------------------------
-- FUNCIONES
-- -----------------------------------------------------------------------------

-- Crea un perfil vacío automáticamente cuando se registra un nuevo usuario.
-- SECURITY DEFINER: se ejecuta con permisos del dueño de la función (postgres),
-- necesario para poder insertar en public.profiles desde un trigger de auth.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id)
  values (new.id);
  return new;
end;
$$;

-- Actualiza automáticamente updated_at antes de cada UPDATE.
-- SECURITY INVOKER: se ejecuta con permisos del usuario que hace la operación.
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Borra el usuario autenticado de auth.users (cascades borran sus datos).
-- SECURITY DEFINER: necesario para poder operar sobre auth.users desde public.
create or replace function public.delete_user()
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  delete from auth.users where id = auth.uid();
end;
$$;


-- -----------------------------------------------------------------------------
-- TRIGGERS
-- -----------------------------------------------------------------------------

-- Crea perfil al registrar usuario
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Actualiza updated_at en user_series
create trigger on_user_series_updated
  before update on public.user_series
  for each row execute function public.handle_updated_at();

-- Actualiza updated_at en user_movies
create trigger on_user_movies_updated
  before update on public.user_movies
  for each row execute function public.handle_updated_at();
