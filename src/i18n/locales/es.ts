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
  },
  search: {
    title: 'Buscar',
  },
  profile: {
    title: 'Perfil',
  },
} as const;

export default es;
