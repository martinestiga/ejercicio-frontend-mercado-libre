import NextI18Next from 'next-i18next';
import path from 'path';

export default new NextI18Next({
  serverLanguageDetection: false,
  browserLanguageDetection: false,
  defaultLanguage: 'es',
  otherLanguages: [],
  localePath: path.resolve('./public/static/locales'),
});
