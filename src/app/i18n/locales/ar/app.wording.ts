import { AppWording } from '../../types';

export const arAppWording: Omit<AppWording, 'appVersion'> = {
  appTitle: 'فيجيل-اج',
  selogan: 'شريككم للسلامة من أجل حياة مستقلة ومطمئنة',
  description:
    ' هو تطبيق مخصص لسلامة كبار السن. تم تصميمه خصيصاً لمساعدة الأسر على الوقاية من السقوط لدى ذويهم المسنين من خلال تحديد المخاطر اليومية غير المرئية غالباً. يتضمن 12 سؤالاً بإجابات نعم/لا. كل إجابة "نعم" تحسب نقطة واحدة، بينما كل إجابة "لا" تحسب صفر نقاط. الدرجة العالية تشير إلى خطر سقوط أكبر.',
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
