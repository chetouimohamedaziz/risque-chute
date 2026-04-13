export type SupportedLanguage = 'fr' | 'en' | 'ar';

export interface AppWording {
  appTitle: string;
  appVersion: string;
  selogan: string;
  description: string;
  privacyTitle: string;
  privacyText: string;
  evaluationTitle: string;
  recommendationsTitle: string;
  buttonShowRecommendations: string;
  buttonRestartEvaluation: string;
  answerYes: string;
  answerNo: string;
  languageLabel: string;
}

export interface RecommendationsWording {
  emptyMessage: string;
  riskMessages: {
    none: string;
    low: string;
    moderate: string;
    high: string;
  };
  riskEmojis: {
    none: string;
    low: string;
    moderate: string;
    high: string;
  };
  scoreLabel: string;
  totalQuestions: number;
  recommendationsTitle: string;
}

export interface LocalizedQuestion {
  id: number;
  text: string;
}

export interface LocalizedRecommendation {
  id: number;
  text: string;
}

export interface LocaleDictionary {
  code: SupportedLanguage;
  label: string;
  flag: string;
  direction: 'ltr' | 'rtl';
  appWording: Omit<AppWording, 'appVersion'>;
  recommendationsWording: RecommendationsWording;
  questions: LocalizedQuestion[];
  recommendations: LocalizedRecommendation[];
}
