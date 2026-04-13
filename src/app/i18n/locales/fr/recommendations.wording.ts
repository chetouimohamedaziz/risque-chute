import { RecommendationsWording } from '../../types';

export const frRecommendationsWording: RecommendationsWording = {
  emptyMessage:
    'Toutes les réponses sont "Non". Aucune recommandation à afficher. Continuez à suivre les bonnes pratiques de prévention des chutes pour assurer la sécurité de vos proches âgés.',
  riskMessages: {
    none: 'Pas de risque de chute',
    low: 'Risque de chute bas',
    moderate: 'Risque de chute modéré',
    high: 'Risque de chute élevé',
  },
  riskEmojis: {
    none: '😌',
    low: '🙂',
    moderate: '😐',
    high: '🚨',
  },
  scoreLabel: 'Score',
  totalQuestions: 12,
  recommendationsTitle: 'Recommandations',
};
