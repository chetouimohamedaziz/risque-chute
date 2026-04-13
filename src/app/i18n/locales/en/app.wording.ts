import { AppWording } from '../../types';

export const enAppWording: Omit<AppWording, 'appVersion'> = {
  appTitle: 'VigilAge',
  selogan: 'Your safety partner for an autonomous and peaceful life',
  description:
    ' is an application dedicated to the safety of seniors. It has been specially designed to help prevent falls among older loved ones by identifying often invisible everyday risks.',
  privacyTitle: '🔒 Privacy',
  privacyText:
    'Your answers remain anonymous and confidential. This questionnaire aims to better understand your knowledge, practices, and needs regarding fall prevention.',
  evaluationTitle: 'Fall Risk Assessment',
  recommendationsTitle: 'Recommendations',
  buttonShowRecommendations: 'View recommendations',
  buttonRestartEvaluation: 'Restart assessment',
  answerYes: 'Yes',
  answerNo: 'No',
  languageLabel: 'Language',
};
