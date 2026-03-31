const es = {
  common: {
    appName: 'Series Tracker',
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
      passwordPlaceholder: 'Contraseña)',
      createAccountButton: 'Crear cuenta',
      linkToLogin: '¿Ya tienes cuenta? Inicia sesión',
    },
    errors: {
      invalidCredentials: 'Email o contraseña incorrectos',
      emailAlreadyExists: 'Ya existe una cuenta con ese email',
      generic: 'Algo ha ido mal. Inténtalo de nuevo',
    },
  },
  tabs: {
    home: 'Mis series',
    search: 'Buscar',
    profile: 'Perfil',
  },
  home: {
    title: 'Mis series',
    greeting: {
      morning: 'Buenos días,',
      afternoon: 'Buenas tardes,',
      evening: 'Buenas noches,',
    },
  },
  series: {
    status: {
      watching: 'Viendo',
      completed: 'Completadas',
      planned: 'Por ver',
      dropped: 'Abandonadas',
    },
  },
  search: {
    title: 'Buscar',
    placeholder: 'Busca una serie...',
  },
  profile: {
    title: 'Perfil',
  },

  homeView: {
    appName: 'MyWatchList',
    welcome: 'Hola, {{name}}',
  },
} as const;

export default es;
