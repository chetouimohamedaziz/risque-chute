import { LocaleDictionary } from '../../types';

import { arAppWording } from './app.wording';
import { arQuestions } from './questions';
import { arRecommendations } from './recommendations';
import { arRecommendationsWording } from './recommendations.wording';

export const localeAr: LocaleDictionary = {
  code: 'ar',
  label: 'العربية',
  flag: '🇹🇳',
  direction: 'rtl',
  appWording: arAppWording,
  recommendationsWording: arRecommendationsWording,
  questions: arQuestions,
  recommendations: arRecommendations,
};
