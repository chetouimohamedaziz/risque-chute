import { Injectable } from '@angular/core';

import { AnswerSelection, EvaluationResult, Recommendation } from '../models';

@Injectable({ providedIn: 'root' })
export class EvaluationService {
  upsertAnswer(answers: AnswerSelection[], event: AnswerSelection): AnswerSelection[] {
    const existingIndex = answers.findIndex(answer => answer.questionId === event.questionId);

    if (existingIndex === -1) {
      return [...answers, event];
    }

    return answers.map((answer, index) => (index === existingIndex ? event : answer));
  }

  evaluate(
    answers: AnswerSelection[],
    recommendations: Recommendation[],
  ): EvaluationResult {
    const yesAnswerIds = answers
      .filter(answer => answer.answer)
      .map(answer => answer.questionId);

    return {
      riskScore: yesAnswerIds.length,
      filteredRecommendations: recommendations.filter(recommendation =>
        yesAnswerIds.includes(recommendation.id),
      ),
    };
  }
}
