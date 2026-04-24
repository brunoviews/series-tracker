import en from './locales/en';
import es from './locales/es';
import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Detecta el idioma del dispositivo. Si no es 'en', usamos 'es' como fallback.
export const deviceLanguage = getLocales()[0]?.languageCode === 'en' ? 'en' : 'es';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: deviceLanguage,
  fallbackLng: 'es',
  interpolation: {
    // React ya escapa los valores — no hace falta que lo haga i18next
    escapeValue: false,
  },
});

export default i18n;

// ─── TypeScript: autocompletado en t('auth.login.title') ─────────────────────
// Al declarar esto aquí, todos los useTranslation() del proyecto tienen
// los tipos de las claves inferidos automáticamente desde es.ts.
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof es;
    };
  }
}
