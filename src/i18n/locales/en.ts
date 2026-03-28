const en = {
  common: {
    appName: 'Series Tracker',
  },
  auth: {
    login: {
      title: 'Welcome Back!',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      submitButton: 'Sign in',

      linkToRegister: "Don't have an account? Sign up",
    },
    register: {
      title: 'Create account',
      firstNamePlaceholder: 'First name',
      lastNamePlaceholder: 'Last name',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      createAccountButton: 'Create account',
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
    welcome: 'Hello',
    greeting: {
      morning: 'Good morning,',
      afternoon: 'Good afternoon,',
      evening: 'Good evening,',
    },
  },
  series: {
    status: {
      watching: 'Watching',
      completed: 'Completed',
      planned: 'Plan to watch',
      dropped: 'Dropped',
    },
  },
  search: {
    title: 'Search',
  },
  profile: {
    title: 'Profile',
  },

  homeView: {
    appName: 'MyWatchList',
    welcome: 'Hello, {{name}}',
  },
} as const;

export default en;
