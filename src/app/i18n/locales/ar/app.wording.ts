import { AppWording } from '../../types';

export const arAppWording: Omit<AppWording, 'appVersion'> = {
  appTitle: 'فيجيل-اج',
  selogan: 'شريككم للسلامة من أجل حياة مستقلة ومطمئنة',
  description:
    ' هو تطبيق مخصص لسلامة كبار السن. تم تصميمه خصيصا لمساعدة الأسر على الوقاية من السقوط لدى ذويهم المسنين من خلال تحديد المخاطر اليومية غير المرئية غالبا.',
  privacyTitle: '🔒 الخصوصية',
  privacyText:
    'تظل إجاباتكم مجهولة الهوية وسرية. يهدف هذا الاستبيان إلى فهم أفضل لمعارفكم وممارساتكم واحتياجاتكم في مجال الوقاية من السقوط.',
  evaluationTitle: 'تقييم خطر السقوط',
  recommendationsTitle: 'التوصيات',
  buttonShowRecommendations: 'عرض التوصيات',
  buttonRestartEvaluation: 'إعادة التقييم',
  answerYes: 'نعم',
  answerNo: 'لا',
  languageLabel: 'اللغة',
};
