import { SupportedLanguage } from '../types';
import { mapByLanguage } from './language-factory';

export const LANGUAGE_DIRECTIONS: Record<SupportedLanguage, 'ltr' | 'rtl'> = mapByLanguage(
  locale => locale.direction,
);

export const LANGUAGE_LABELS: Record<SupportedLanguage, string> = mapByLanguage(
  locale => locale.label,
);

export const LANGUAGE_FLAGS: Record<SupportedLanguage, string> = mapByLanguage(
  locale => locale.flag,
);
