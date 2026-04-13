import { LocalizedQuestion, SupportedLanguage } from '../types';
import { mapByLanguage } from './language-factory';

export const QUESTIONS_BY_LANGUAGE: Record<SupportedLanguage, LocalizedQuestion[]> = mapByLanguage(
  locale => locale.questions,
);

export const QUESTIONS = QUESTIONS_BY_LANGUAGE.fr;
