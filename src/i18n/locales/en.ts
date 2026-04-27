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
    Movie: {
      SearchingError: 'Error searching for movies. Please try again.',
      AddingError: 'Error adding movie. Please try again.',
      RemovingError: 'Error removing movie. Please try again.',
    },
  },
  commonSuccess: {
    Series: {
      Added: 'Series updated successfully.',
      Removed: 'Series removed successfully.',
    },
    Movie: {
      Added: 'Movie updated successfully.',
      Removed: 'Movie removed successfully.',
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
      passwordPlaceholder: 'Password (minimum 6 characters)',
      confirmPasswordPlaceholder: 'Confirm password',
      createAccountButton: 'Create account',
      linkToLogin: 'Already have an account? Sign in',
    },
    errors: {
      invalidCredentials: 'Invalid email or password',
      emailAlreadyExists: 'An account with that email already exists',
      passwordsDoNotMatch: 'Passwords do not match',
      passwordTooShort: 'Password is too short',
      nameRequired: 'First and last name are required',
      nameTooShort: 'First and last name must be at least 2 characters',
      invalidEmail: 'Invalid email address',
      generic: 'Something went wrong. Please try again',
    },

    loading: {
      loadingProfile: 'Loading profile...',
     
    },
  },
  tabs: {
    home: 'Home',
    series: 'Series',
    movies: 'Movies',
    search: 'Search',
    profile: 'Profile',
  },
  library: {
    kicker: 'Library',
    series: {
      title: 'Series',
      subtitle: 'Your personal list, by status',
    },
    movies: {
      title: 'Movies',
      subtitle: 'Your personal list, by status',
    },
  },
  homeTab: {
    hero: {
      kicker: 'Trending this week',
      trending: 'Trending',
    },
    sections: {
      movies: 'Movies',
      series: 'Series',
      week: 'Week',
    },
    error: {
      title: "Couldn't load Home",
      subtitle: 'Check your connection or TMDB API key and try again.',
      retry: 'Retry',
    },
  },
  home: {
    title: 'My series',
    welcome: 'Hello',
    greeting: {
      morning: 'Good morning,',
      afternoon: 'Good afternoon,',
      evening: 'Good evening,',
    },
    emptySeries: {
      title: 'Nothing here yet',
      subtitle: 'Search for a series and start building your list.',
    },
    emptyMovies: {
      title: 'Nothing here yet',
      subtitle: 'Search for a movie and start building your list.',
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
    placeholderMovie: 'Search for a movie...',
    filter: {
      series: 'Series',
      movies: 'Movies',
    },
    empty: {
      title: 'No results found',
      subtitle: 'Try a different title or check the spelling.',
    },
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
    deleteAccount: {
      sectionTitle: 'Danger Zone',
      title: 'Delete Account',
      description:
        'This action is permanent. All your series, movies and data will be deleted and cannot be recovered.',
      cancel: 'Cancel',
      confirm: 'Delete Account',
      error: 'Failed to delete account. Please try again.',
    },
  },

  editProfile: {
    title: 'Edit Profile',
    avatarHint: 'Avatar with initials (photo coming soon)',
    save: 'Save changes',
    fields: {
      firstName: 'First name',
      firstNamePlaceholder: 'Your first name',
      lastName: 'Last name',
      lastNamePlaceholder: 'Your last name',
      userEmail: 'Email',
      userEmailPlaceholder: 'Your email',
    },
    success: 'Profile updated successfully.',
    error: 'Failed to update profile. Please try again.',
  },

  modal: {
    addSerie: 'My list',
    cancel: 'Cancel',
    confirm: 'Confirm',
    ratingLabel: 'Your rating',
    ratingPlaceholder: '0 - 10',
  },
  seriesCard: {
    seasons: 'season',
    seasonsPlural: 'seasons',
    episodes: 'episodes',
    userRating: 'My rating',
  },
  homeView: {
    appName: 'MyWatchList',
    welcome: 'Hello, {{name}}',
  },
} as const;

export default en;
