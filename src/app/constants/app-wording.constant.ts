import packageJson from '../../../package.json';

const packageVersion =
  (packageJson as { version?: string } | undefined)?.version ??
  (packageJson as { default?: { version?: string } } | undefined)?.default?.version ??
  '0.0.0';

export const APP_WORDING = {
  appTitle: 'VigilÂge',
  appVersion: `v${packageVersion}`,
  selogan: 'Votre partenaire de sécurité pour une vie autonome et sereine',
  description: ' est une application dédiée à la sécurité de nos aînés. Elle a été spécialement conçue pour aider les seniors à prévenir les chutes chez leurs proches âgés en identifiant les risques souvent invisibles du quotidien.',
  privacyTitle: '🔒 Confidentialité',
  privacyText: 'Vos réponses resteront anonymes et confidentielles. Ce questionnaire vise à mieux comprendre vos connaissances, pratiques et besoins en matière de prévention des chutes.',
  evaluationTitle: 'Évaluation du Risque de Chute',
  recommendationsTitle: 'Recommandations',
  buttonShowRecommendations: 'Voir les recommandations',
  buttonRestartEvaluation: 'Recommencer l\'évaluation',
};