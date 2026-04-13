import { LocalizedRecommendation, SupportedLanguage } from '../types';
import { mapByLanguage } from './language-factory';

export const RECOMMENDATIONS_BY_LANGUAGE: Record<SupportedLanguage, LocalizedRecommendation[]> =
  mapByLanguage(locale => locale.recommendations);

export const RECOMMENDATIONS = RECOMMENDATIONS_BY_LANGUAGE.fr;
