import { AppWording } from '../../types';

export const frAppWording: Omit<AppWording, 'appVersion'> = {
  appTitle: 'VigilAge',
  selogan: 'Votre partenaire de sécurité pour une vie autonome et sereine',
  description:
    ' est une application dédiée à la sécurité de nos aînés. Elle a été spécialement conçue pour aider les seniors à prévenir les chutes chez leurs proches âgés en identifiant les risques souvent invisibles du quotidien. Elle comporte 12 questions à réponses dichotomiques (oui/non). Chaque réponse « oui » rapporte 1 point, tandis que chaque réponse « non » vaut 0 point. Un score élevé indique un risque de chute plus important.',
  privacyTitle: '🔒 Confidentialité',
  privacyText:
    'Vos réponses resteront anonymes et confidentielles. Ce questionnaire vise à mieux comprendre vos connaissances, pratiques et besoins en matière de prévention des chutes.',
  evaluationTitle: 'Évaluation du Risque de Chute',
  recommendationsTitle: 'Recommandations',
  buttonShowRecommendations: 'Voir les recommandations',
  buttonRestartEvaluation: "Recommencer l'évaluation",
  answerYes: 'Oui',
  answerNo: 'Non',
  languageLabel: 'Langue',
};
