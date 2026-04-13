import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { App } from './app';
import { APP_WORDING, RECOMMENDATIONS_WORDING } from './constants/wording.constant';
import { QUESTIONS, RECOMMENDATIONS } from './i18n';

describe('App', () => {
  const createAppFixture = () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    return fixture;
  };

  const getCallToActionButton = (fixture: ReturnType<typeof createAppFixture>) =>
    fixture.debugElement.query(By.css('.recommendations-button')).nativeElement as HTMLButtonElement;

  const answerAllQuestions = (
    fixture: ReturnType<typeof createAppFixture>,
    answerSelector: (index: number) => boolean,
  ) => {
    const questionSteps = fixture.debugElement.queryAll(By.css('app-question'));

    questionSteps.forEach((step, index) => {
      const buttons = step.queryAll(By.css('button'));
      const buttonIndex = answerSelector(index) ? 0 : 1;

      buttons[buttonIndex].triggerEventHandler('click');
    });

    fixture.detectChanges();
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render the evaluation title and one question component per question', async () => {
    const fixture = createAppFixture();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain(APP_WORDING.evaluationTitle);
    expect(compiled.querySelectorAll('app-question')).toHaveLength(QUESTIONS.length);
  });

  it('should update an answer instead of duplicating it', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.onAnswerSelected({ questionId: 1, answer: true });
    app.onAnswerSelected({ questionId: 1, answer: false });

    expect(app['answers']).toHaveLength(1);
    expect(app['answers'][0]).toEqual({ questionId: 1, answer: false });
  });

  it('should show only recommendations linked to answers set to Oui', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.onAnswerSelected({ questionId: 1, answer: true });
    app.onAnswerSelected({ questionId: 2, answer: false });
    app.onAnswerSelected({ questionId: 3, answer: true });

    app.showRecommendations();
    fixture.detectChanges();

    expect(app['showQuestions']).toBe(false);
    expect(app.currentSectionTitle).toBe(APP_WORDING.recommendationsTitle);
    expect(app['buttonText']).toBe(APP_WORDING.buttonRestartEvaluation);
    expect(app['filteredRecommendations']).toEqual([
      RECOMMENDATIONS[0],
      RECOMMENDATIONS[2],
    ]);
  });

  it('should render the recommendations component after showing recommendations', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.onAnswerSelected({ questionId: 1, answer: true });
    app.showRecommendations();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-recommendations')).not.toBeNull();
    expect(compiled.querySelector('h1')?.textContent).toContain(APP_WORDING.recommendationsTitle);
  });

  it('should reset the evaluation state', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app.onAnswerSelected({ questionId: 1, answer: true });
    app.showRecommendations();
    app.restartEvaluation();

    expect(app['showQuestions']).toBe(true);
    expect(app['answers']).toEqual([]);
    expect(app['filteredRecommendations']).toEqual([]);
    expect(app['buttonText']).toBe(APP_WORDING.buttonShowRecommendations);
    expect(app.currentSectionTitle).toBe(APP_WORDING.evaluationTitle);
  });

  it('should report all questions answered only when answer count matches question count', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    expect(app.isAllQuestionsAnswered).toBe(false);

    app['questions'].forEach((question: { id: number }) => {
      app.onAnswerSelected({ questionId: question.id, answer: true });
    });

    expect(app.isAllQuestionsAnswered).toBe(true);
  });

  it('should keep the recommendations button disabled until every question is answered', () => {
    const fixture = createAppFixture();
    const app = fixture.componentInstance;
    const button = getCallToActionButton(fixture);

    expect(button.disabled).toBe(true);

    app['questions'].slice(0, app['questions'].length - 1).forEach((question: { id: number }) => {
      app.onAnswerSelected({ questionId: question.id, answer: true });
    });
    fixture.detectChanges();

    expect(button.disabled).toBe(true);

    app.onAnswerSelected({
      questionId: app['questions'][app['questions'].length - 1].id,
      answer: false
    });
    fixture.detectChanges();

    expect(button.disabled).toBe(false);
  });

  it('should let the user answer through the UI and show matching recommendations after clicking the CTA', () => {
    const fixture = createAppFixture();

    answerAllQuestions(fixture, (index) => index % 2 === 0);

    const ctaButton = getCallToActionButton(fixture);

    expect(ctaButton.disabled).toBe(false);

    ctaButton.click();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const renderedRecommendations = compiled.querySelectorAll('.recommendations-card__item');

    expect(compiled.querySelector('h1')?.textContent).toContain(APP_WORDING.recommendationsTitle);
    expect(compiled.querySelectorAll('app-question')).toHaveLength(0);
    expect(renderedRecommendations).toHaveLength(6);
    expect(renderedRecommendations[0]?.textContent).toContain(RECOMMENDATIONS[0].text);
    expect(renderedRecommendations[1]?.textContent).toContain(RECOMMENDATIONS[2].text);
  });

  it('should render the empty recommendations message when every answer is Non', () => {
    const fixture = createAppFixture();

    answerAllQuestions(fixture, () => false);

    const ctaButton = getCallToActionButton(fixture);
    ctaButton.click();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelectorAll('.recommendations-card__item')).toHaveLength(0);
    expect(compiled.querySelector('.recommendations-card__empty')?.textContent).toContain(
      RECOMMENDATIONS_WORDING.emptyMessage,
    );
  });

  it('should switch the CTA to restart and restore the questionnaire after a second click', () => {
    const fixture = createAppFixture();

    answerAllQuestions(fixture, () => true);

    const ctaButton = getCallToActionButton(fixture);

    ctaButton.click();
    fixture.detectChanges();
    expect(ctaButton.textContent).toContain(APP_WORDING.buttonRestartEvaluation);

    ctaButton.click();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain(APP_WORDING.evaluationTitle);
    expect(compiled.querySelectorAll('app-question')).toHaveLength(QUESTIONS.length);
    expect(compiled.querySelector('app-recommendations')).toBeNull();
  });

  it('should change language and reset evaluation state', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;

    app['answers'] = [{ questionId: 1, answer: true }];
    app['filteredRecommendations'] = [{ id: 1, text: 'rec' }];
    app['showQuestions'] = false;
    app['riskScore'] = 3;
    app['buttonText'] = 'Temp';

    app.onLanguageSelected('en');

    expect(app['selectedLanguage']).toBe('en');
    expect(app['showQuestions']).toBe(true);
    expect(app['answers']).toEqual([]);
    expect(app['filteredRecommendations']).toEqual([]);
    expect(app['riskScore']).toBe(0);
    expect(app['buttonText']).toBe(app.appWording.buttonShowRecommendations);
  });
});
