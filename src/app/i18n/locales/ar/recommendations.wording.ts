import { RecommendationsWording } from '../../types';

export const arRecommendationsWording: RecommendationsWording = {
  emptyMessage:
    'جميع الإجابات هي "لا". لا توجد توصيات للعرض. استمروا في اتباع أفضل ممارسات الوقاية من السقوط لضمان سلامة كبار السن.',
  riskMessages: {
    none: 'لا يوجد خطر سقوط',
    low: 'خطر سقوط منخفض',
    moderate: 'خطر سقوط متوسط',
    high: 'خطر سقوط مرتفع',
  },
  riskEmojis: {
    none: '😌',
    low: '🙂',
    moderate: '😐',
    high: '🚨',
  },
  scoreLabel: 'النتيجة',
  totalQuestions: 12,
  recommendationsTitle: 'التوصيات',
};
