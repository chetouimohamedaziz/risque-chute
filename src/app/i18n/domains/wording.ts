import packageJson from '../../../../package.json';

import { AppWording, RecommendationsWording, SupportedLanguage } from '../types';
import { mapByLanguage } from './language-factory';

const packageVersion =
  (packageJson as { version?: string } | undefined)?.version ??
  (packageJson as { default?: { version?: string } } | undefined)?.default?.version ??
  '0.0.0';

const appVersion = `v${packageVersion}`;

const withVersion = (wording: Omit<AppWording, 'appVersion'>): AppWording => ({
  ...wording,
  appVersion,
});

export const APP_WORDING_BY_LANGUAGE: Record<SupportedLanguage, AppWording> = mapByLanguage(locale =>
  withVersion(locale.appWording),
);

export const RECOMMENDATIONS_WORDING_BY_LANGUAGE: Record<SupportedLanguage, RecommendationsWording> =
  mapByLanguage(locale => locale.recommendationsWording);

export const APP_WORDING = APP_WORDING_BY_LANGUAGE.fr;
export const RECOMMENDATIONS_WORDING = RECOMMENDATIONS_WORDING_BY_LANGUAGE.fr;
