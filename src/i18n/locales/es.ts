const es = {
  common: {
    appName: 'Series Tracker',
  },
  auth: {
    login: {
      title: 'Iniciar sesión',
      linkToRegister: '¿No tienes cuenta? Regístrate',
    },
    register: {
      title: 'Registro',
      linkToLogin: '¿Ya tienes cuenta? Inicia sesión',
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
