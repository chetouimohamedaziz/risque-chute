import { LocaleDictionary } from '../../types';

import { frAppWording } from './app.wording';
import { frQuestions } from './questions';
import { frRecommendations } from './recommendations';
import { frRecommendationsWording } from './recommendations.wording';

export const localeFr: LocaleDictionary = {
  code: 'fr',
  label: 'Français',
  flag: '🇫🇷',
  direction: 'ltr',
  appWording: frAppWording,
  recommendationsWording: frRecommendationsWording,
  questions: frQuestions,
  recommendations: frRecommendations,
};
