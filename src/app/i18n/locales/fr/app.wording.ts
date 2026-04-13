import { AppWording } from '../../types';

export const frAppWording: Omit<AppWording, 'appVersion'> = {
  appTitle: 'VigilAge',
  selogan: 'Votre partenaire de securite pour une vie autonome et sereine',
  description:
    ' est une application dediee a la securite de nos aines. Elle a ete specialement concue pour aider les seniors a prevenir les chutes chez leurs proches ages en identifiant les risques souvent invisibles du quotidien.',
  privacyTitle: '🔒 Confidentialité',
  privacyText:
    'Vos reponses resteront anonymes et confidentielles. Ce questionnaire vise a mieux comprendre vos connaissances, pratiques et besoins en matiere de prevention des chutes.',
  evaluationTitle: 'Evaluation du Risque de Chute',
  recommendationsTitle: 'Recommandations',
  buttonShowRecommendations: 'Voir les recommandations',
  buttonRestartEvaluation: "Recommencer l'evaluation",
  answerYes: 'Oui',
  answerNo: 'Non',
  languageLabel: 'Langue',
};
