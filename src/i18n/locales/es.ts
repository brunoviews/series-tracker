const es = {
  common: {
    appName: 'Series Tracker',
  },
  commonErrors: {
    Series: {
      notFound: 'Serie no encontrada',
      SearchingError: 'Error buscando serie. Por favor, inténtalo de nuevo.',
      AddingError: 'Error añadiendo serie. Por favor, inténtalo de nuevo.',
      RemovingError: 'Error eliminando serie. Por favor, inténtalo de nuevo.',
    },
    Movie: {
      SearchingError: 'Error buscando película. Por favor, inténtalo de nuevo.',
      AddingError: 'Error añadiendo película. Por favor, inténtalo de nuevo.',
      RemovingError:
        'Error eliminando película. Por favor, inténtalo de nuevo.',
    },
  },
  commonSuccess: {
    Series: {
      Added: 'Serie actualizada correctamente.',
      Removed: 'Serie eliminada correctamente.',
    },
    Movie: {
      Added: 'Película actualizada correctamente.',
      Removed: 'Película eliminada correctamente.',
    },
  },
  auth: {
    login: {
      title: '¡Bienvenido de nuevo!',
      emailPlaceholder: 'Correo electrónico',
      passwordPlaceholder: 'Contraseña',
      submitButton: 'Entrar',
      linkToRegister: '¿No tienes cuenta? Regístrate',
    },
    register: {
      title: 'Crear cuenta',
      firstNamePlaceholder: 'Nombre',
      lastNamePlaceholder: 'Apellidos',
      emailPlaceholder: 'Correo electrónico',
      passwordPlaceholder: 'Contraseña (mínimo 6 caracteres)',
      confirmPasswordPlaceholder: 'Confirmar contraseña',
      createAccountButton: 'Crear cuenta',
      linkToLogin: '¿Ya tienes cuenta? Inicia sesión',
    },
    errors: {
      invalidCredentials: 'Email o contraseña incorrectos',
      emailAlreadyExists: 'Ya existe una cuenta con ese email',
      passwordsDoNotMatch: 'Las contraseñas no coinciden',
      passwordTooShort: 'La contraseña es demasiado corta',
      nameRequired: 'Nombre y apellidos son obligatorios',
      nameTooShort: 'Nombre y apellidos deben tener al menos 2 caracteres',
      invalidEmail: 'Correo electrónico no válido',
      generic: 'Algo ha ido mal. Inténtalo de nuevo',
    },
    loading: {
      loadingProfile: 'Cargando perfil...',
    },
  },
  tabs: {
    home: 'Inicio',
    series: 'Series',
    movies: 'Películas',
    search: 'Buscar',
    profile: 'Perfil',
  },
  library: {
    kicker: 'Biblioteca',
    series: {
      title: 'Series',
      subtitle: 'Tu lista personal, por estado',
    },
    movies: {
      title: 'Películas',
      subtitle: 'Tu lista personal, por estado',
    },
  },
  homeTab: {
    hero: {
      kicker: 'Lo más visto esta semana',
      trending: 'Trending',
    },
    sections: {
      movies: 'Películas',
      series: 'Series',
      week: 'Lo más visto esta semana',
    },
    error: {
      title: 'No se pudo cargar el Home',
      subtitle: 'Revisa tu conexión o la API key de TMDB y vuelve a intentarlo.',
      retry: 'Reintentar',
    },
  },
  home: {
    title: 'Mis series',
    greeting: {
      morning: 'Buenos días,',
      afternoon: 'Buenas tardes,',
      evening: 'Buenas noches,',
    },
    emptySeries: {
      title: 'Nada por aquí todavía',
      subtitle: 'Busca una serie y empieza a construir tu lista.',
    },
    emptyMovies: {
      title: 'Nada por aquí todavía',
      subtitle: 'Busca una película y empieza a construir tu lista.',
    },
  },
  series: {
    status: {
      watching: 'Viendo',
      completed: 'Completadas',
      planned: 'Por ver',
      dropped: 'Abandonadas',
      removeFromList: 'Eliminar de mis listas',
    },
  },
  search: {
    title: 'Buscar',
    placeholder: 'Busca una serie...',
    placeholderMovie: 'Busca una película...',
    filter: {
      series: 'Series',
      movies: 'Películas',
    },
    empty: {
      title: 'Sin resultados',
      subtitle: 'Prueba con otro título o revisa la ortografía.',
    },
  },
  detail: {
    seasons: 'Temporadas',
    episodes: 'Episodios',
    status: 'Estado',
    duration: 'Duración',
    synopsis: 'Sinopsis',
    cast: 'Reparto',
    tmdbStatus: {
      Ended: 'Finalizada',
      'Returning Series': 'En emisión',
      'In Production': 'En producción',
      Canceled: 'Cancelada',
      Planned: 'Anunciada',
      Released: 'Estrenada',
      'Post Production': 'En postproducción',
    },
    addToList: 'Añadir a mi lista',
    editStatus: 'Cambiar estado',
  },
  profile: {
    title: 'Perfil',
    stats: {
      title: 'Mis estadísticas',
      watching: 'Viendo',
      completed: 'Completadas',
      planned: 'Por ver',
      dropped: 'Abandonadas',
    },
    preferences: {
      title: 'Preferencias',
      editProfile: 'Editar perfil',
      notifications: 'Notificaciones',
      language: 'Idioma',
      appearance: 'Apariencia',
      privacySecurity: 'Privacidad y seguridad',
    },
    logout: 'Cerrar sesión',
    deleteAccount: {
      sectionTitle: 'Zona peligrosa',
      title: 'Eliminar cuenta',
      description:
        'Esta acción es permanente. Todas tus series, películas y datos serán eliminados y no podrán recuperarse.',
      cancel: 'Cancelar',
      confirm: 'Eliminar cuenta',
      error: 'No se pudo eliminar la cuenta. Por favor, inténtalo de nuevo.',
    },
  },

  editProfile: {
    title: 'Editar perfil',
    avatarHint: 'Avatar con iniciales (foto próximamente)',
    save: 'Guardar cambios',
    fields: {
      firstName: 'Nombre',
      firstNamePlaceholder: 'Tu nombre',
      lastName: 'Apellido',
      lastNamePlaceholder: 'Tu apellido',
      userEmail: 'Correo electrónico',
      userEmailPlaceholder: 'Tu correo electrónico',
    },
    success: 'Perfil actualizado correctamente.',
    error: 'No se pudo actualizar el perfil. Inténtalo de nuevo.',
  },

  modal: {
    addSerie: 'Mi lista',
    cancel: 'Cancelar',
    confirm: 'Confirmar',
    ratingLabel: 'Tu nota',
    ratingPlaceholder: '0 - 10',
  },
  seriesCard: {
    seasons: 'temporada',
    seasonsPlural: 'temporadas',
    episodes: 'episodios',
    userRating: 'Mi nota',
  },
  homeView: {
    appName: 'MyWatchList',
    welcome: 'Hola, {{name}}',
  },
} as const;

export default es;
