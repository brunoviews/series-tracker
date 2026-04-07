const en = {
  common: {
    appName: 'Series Tracker',
  },
  commonErrors: {
    Series: {
      notFound: 'Series not found',
      SearchingError: 'Error searching for series. Please try again.',
      AddingError: 'Error adding series. Please try again.',
      RemovingError: 'Error removing series. Please try again.',
    },
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
      removeFromList: 'Remove from my lists',
    },
  },
  search: {
    title: 'Search',
    placeholder: 'Search for a series...',
  },
  detail: {
    seasons: 'Seasons',
    episodes: 'Episodes',
    status: 'Status',
    duration: 'Duration',
    synopsis: 'Synopsis',
    cast: 'Cast',
    tmdbStatus: {
      Ended: 'Ended',
      'Returning Series': 'Returning Series',
      'In Production': 'In Production',
      Canceled: 'Canceled',
      Planned: 'Announced',
      Released: 'Released',
      'Post Production': 'Post Production',
    },
    addToList: 'Add to my list',
    editStatus: 'Change status',
  },
  profile: {
    title: 'Profile',
    stats: {
      title: 'My Stats',
      watching: 'Watching',
      completed: 'Completed',
      planned: 'Planned',
      dropped: 'Dropped',
    },
    preferences: {
      title: 'Preferences',
      editProfile: 'Edit Profile',
      notifications: 'Notifications',
      language: 'Language',
      appearance: 'Appearance',
      privacySecurity: 'Privacy & Security',
    },
    logout: 'Log out',
  },

  modal: {
    addSerie: 'Add to my list',
    cancel: 'Cancel',
    confirm: 'Confirm',
  },
  homeView: {
    appName: 'MyWatchList',
    welcome: 'Hello, {{name}}',
  },
} as const;

export default en;
