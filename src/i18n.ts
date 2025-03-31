import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { pagesTranslation } from './pages/pages.i18n';

const resources = {
  ptBR: {
    translation: {
      app: {
        title: 'Template de Front-end',
      },
      ...pagesTranslation,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ptBR',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
