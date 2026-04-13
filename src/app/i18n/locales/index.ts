import { LocaleDictionary, SupportedLanguage } from '../types';

import { localeAr } from './ar/index';
import { localeEn } from './en/index';
import { localeFr } from './fr/index';

export const localeByLanguage: Record<SupportedLanguage, LocaleDictionary> = {
  fr: localeFr,
  en: localeEn,
  ar: localeAr,
};
