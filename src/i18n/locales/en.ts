const en = {
  common: {
    appName: 'Series Tracker',
  },
  auth: {
    login: {
      title: 'Sign in',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      submitButton: 'Sign in',
      linkToRegister: "Don't have an account? Sign up",
    },
    register: {
      title: 'Create account',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password (min. 6 characters)',
      submitButton: 'Sign up',
      linkToLogin: 'Already have an account? Sign in',
    },
    errors: {
      invalidCredentials: 'Invalid email or password',
      emailAlreadyExists: 'An account with that email already exists',
      generic: 'Something went wrong. Please try again',
    },
  },
  tabs: {
    home: 'My series',
    search: 'Search',
    profile: 'Profile',
  },
  home: {
    title: 'My series',
  },
  search: {
    title: 'Search',
  },
  profile: {
    title: 'Profile',
  },
} as const;

export default en;
