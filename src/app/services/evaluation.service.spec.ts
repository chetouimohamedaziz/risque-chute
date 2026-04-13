import { EvaluationService } from './evaluation.service';

describe('EvaluationService', () => {
  let service: EvaluationService;

  beforeEach(() => {
    service = new EvaluationService();
  });

  it('should add a new answer when the question does not already exist', () => {
    const result = service.upsertAnswer([], { questionId: 1, answer: true });

    expect(result).toEqual([{ questionId: 1, answer: true }]);
  });

  it('should replace an existing answer for the same question', () => {
    const result = service.upsertAnswer(
      [
        { questionId: 1, answer: true },
        { questionId: 2, answer: false },
      ],
      { questionId: 1, answer: false },
    );

    expect(result).toEqual([
      { questionId: 1, answer: false },
      { questionId: 2, answer: false },
    ]);
  });

  it('should compute risk score and filtered recommendations from true answers', () => {
    const result = service.evaluate(
      [
        { questionId: 1, answer: true },
        { questionId: 2, answer: false },
        { questionId: 3, answer: true },
      ],
      [
        { id: 1, text: 'rec-1' },
        { id: 2, text: 'rec-2' },
        { id: 3, text: 'rec-3' },
      ],
    );

    expect(result.riskScore).toBe(2);
    expect(result.filteredRecommendations).toEqual([
      { id: 1, text: 'rec-1' },
      { id: 3, text: 'rec-3' },
    ]);
  });
});
