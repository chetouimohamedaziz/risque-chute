import { localeByLanguage } from '../locales';
import { LocaleDictionary, SupportedLanguage } from '../types';

const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['fr', 'en', 'ar'];

export function mapByLanguage<T>(selector: (locale: LocaleDictionary) => T): Record<SupportedLanguage, T> {
  return SUPPORTED_LANGUAGES.reduce(
    (acc, language) => {
      acc[language] = selector(localeByLanguage[language]);
      return acc;
    },
    {} as Record<SupportedLanguage, T>,
  );
}
