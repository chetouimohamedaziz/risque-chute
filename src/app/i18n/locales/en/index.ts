import { LocaleDictionary } from '../../types';

import { enAppWording } from './app.wording';
import { enQuestions } from './questions';
import { enRecommendations } from './recommendations';
import { enRecommendationsWording } from './recommendations.wording';

export const localeEn: LocaleDictionary = {
  code: 'en',
  label: 'English',
  flag: '🇬🇧',
  direction: 'ltr',
  appWording: enAppWording,
  recommendationsWording: enRecommendationsWording,
  questions: enQuestions,
  recommendations: enRecommendations,
};
