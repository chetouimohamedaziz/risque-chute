import { Recommendation } from './recommendation.model';

export interface AnswerSelection {
  questionId: number;
  answer: boolean;
}

export interface EvaluationResult {
  riskScore: number;
  filteredRecommendations: Recommendation[];
}
