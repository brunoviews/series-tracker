export const colors = {
  fill: {
    default: {
      base: '#070B11', // fondo absoluto — deep blue-black
      main: '#0C1219', // fondo de pantallas
      weak: '#141C27', // secciones secundarias
      medium: '#1C2635', // cards interactivas
      strong: '#253244', // elementos elevados
      dim: '#080C12', // overlays / scrim
      bright: '#2A3749', // estado activo / hover
    },
    primary: {
      main: '#2DD4BF', // Electric Teal — acento principal
      container: '#14B8A6', // teal profundo para gradientes en CTAs
      variant: '#0D2D28', // superficie con tinte teal
    },
    semantic: {
      error: {
        main: '#400404',
        weak: '#2D1219',
      },
      success: {
        main: '#22C55E',
        weak: '#0F291B',
      },
    },
  },

  stroke: {
    default: {
      main: '#475569',
      weak: '#334155',
      subtle: 'rgba(148, 163, 184, 0.06)',
    },
    primary: {
      main: '#2DD4BF',
      weak: 'rgba(45, 212, 191, 0.35)',
    },
  },

  textIcon: {
    default: {
      strong: '#F1F5F9', // títulos principales — uso restringido
      main: '#CBD5E1', // texto general
      medium: '#94A3B8', // texto secundario / muted
      weak: '#64748B', // placeholders / deshabilitado
    },
    primary: {
      main: '#2DD4BF',
      onPrimary: '#070B11', // texto encima del acento teal
    },
    semantic: {
      error: {
        main: '#FB7185',
      },
    },
  },

  components: {
    button: {
      primary: {
        default: {
          fill: '#2DD4BF',
          fillPressed: '#14B8A6',
          textIcon: '#070B11',
        },
        disabled: {
          fill: '#1C2635',
          textIcon: '#64748B',
        },
      },
      ghost: {
        default: {
          stroke: '#2DD4BF',
          textIcon: '#2DD4BF',
          fillPressed: 'rgba(45, 212, 191, 0.1)',
        },
      },
    },
    input: {
      fill: '#141C27',
      fillFocused: '#1C2635',
      stroke: 'rgba(0,0,0,0)',
      strokeFocused: 'rgba(45, 212, 191, 0.35)',
      placeholder: '#64748B',
    },
    bottomTab: {
      fill: '#0C1219',
      iconDefault: '#64748B',
      iconActive: '#2DD4BF',
      indicator: '#0D2D28',
    },
  },

  transparent: 'rgba(0,0,0,0)',
};
