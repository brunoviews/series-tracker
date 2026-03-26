export const colors = {
  fill: {
    default: {
      base: '#0D0D0D', // fondo absoluto — never pure black
      main: '#131313', // fondo de pantallas
      weak: '#1C1B1B', // secciones secundarias
      medium: '#2A2A2A', // cards interactivas
      strong: '#333333', // elementos elevados
      dim: '#0F0F0F', // overlays / scrim
      bright: '#3A3A3A', // estado activo / hover
    },
    primary: {
      main: '#C4C0FF', // Vivid Violet — acento principal
      container: '#8781FF', // extremo del gradiente en CTAs
      variant: '#1E1B2E', // superficie con tinte violeta
    },
    semantic: {
      error: {
        main: '#F2485A',
        weak: '#3B1219',
      },
      success: {
        main: '#4CAF50',
        weak: '#1B3A1C',
      },
    },
  },

  stroke: {
    default: {
      main: '#938F99',
      weak: '#49454F',
      subtle: 'rgba(255, 255, 255, 0.06)',
    },
    primary: {
      main: '#C4C0FF',
      weak: 'rgba(196, 192, 255, 0.4)',
    },
  },

  textIcon: {
    default: {
      strong: '#FFFFFF', // títulos principales — uso restringido
      main: '#E8E6F0', // texto general
      medium: '#C7C4D8', // texto secundario / muted
      weak: '#938F99', // placeholders / deshabilitado
    },
    primary: {
      main: '#C4C0FF',
      onPrimary: '#0D0D0D', // texto encima del acento violeta
    },
    semantic: {
      error: {
        main: '#F2485A',
      },
    },
  },

  components: {
    button: {
      primary: {
        default: {
          fill: '#C4C0FF',
          fillPressed: '#8781FF',
          textIcon: '#0D0D0D',
        },
        disabled: {
          fill: '#2A2A2A',
          textIcon: '#938F99',
        },
      },
      ghost: {
        default: {
          stroke: '#C4C0FF',
          textIcon: '#C4C0FF',
          fillPressed: 'rgba(196, 192, 255, 0.1)',
        },
      },
    },
    input: {
      fill: '#1C1B1B',
      fillFocused: '#2A2A2A',
      stroke: 'rgba(0,0,0,0)',
      strokeFocused: 'rgba(196, 192, 255, 0.4)',
      placeholder: '#938F99',
    },
    bottomTab: {
      fill: '#131313',
      iconDefault: '#938F99',
      iconActive: '#C4C0FF',
      indicator: '#1E1B2E',
    },
  },

  transparent: 'rgba(0,0,0,0)',
};
