import { RecommendationsWording } from '../../types';

export const enRecommendationsWording: RecommendationsWording = {
  emptyMessage:
    'All answers are "No". No recommendations to display. Keep following fall-prevention best practices to ensure the safety of your older loved ones.',
  riskMessages: {
    none: 'No risk of falling',
    low: 'Low risk of falling',
    moderate: 'Moderate risk of falling',
    high: 'High risk of falling',
  },
  riskEmojis: {
    none: '😌',
    low: '🙂',
    moderate: '😐',
    high: '🚨',
  },
  scoreLabel: 'Score',
  totalQuestions: 12,
  recommendationsTitle: 'Recommendations',
};
