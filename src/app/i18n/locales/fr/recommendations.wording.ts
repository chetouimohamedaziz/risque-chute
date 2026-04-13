import { RecommendationsWording } from '../../types';

export const frRecommendationsWording: RecommendationsWording = {
  emptyMessage:
    'Toutes les reponses sont "Non". Aucune recommendation a afficher. Continuez a suivre les bonnes pratiques de prevention des chutes pour assurer la securite de vos proches ages.',
  riskMessages: {
    none: 'Pas de risque de chute',
    low: 'Risque de chute bas',
    moderate: 'Risque de chute modere',
    high: 'Risque de chute eleve',
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
