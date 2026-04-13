import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import {
  APP_WORDING_BY_LANGUAGE,
  LANGUAGE_DIRECTIONS,
  LANGUAGE_FLAGS,
  LANGUAGE_LABELS,
  SupportedLanguage,
} from './constants/wording.constant';
import { QUESTIONS_BY_LANGUAGE, RECOMMENDATIONS_BY_LANGUAGE } from './i18n';
import { QuestionComponent } from './components/question/question.component';
import { AnswerSelection, Question, Recommendation } from './models';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { EvaluationService } from './services/evaluation.service';
import { ViewportService } from './services/viewport.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatCardModule,
    QuestionComponent,
    RecommendationsComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  private readonly evaluationService = inject(EvaluationService);
  private readonly viewportService = inject(ViewportService);
  protected readonly languageFlags = LANGUAGE_FLAGS;
  protected readonly languageLabels = LANGUAGE_LABELS;
  protected readonly availableLanguages: SupportedLanguage[] = ['fr', 'ar', 'en'];
  protected selectedLanguage: SupportedLanguage = 'fr';
  protected answers: AnswerSelection[] = [];
  protected showQuestions = true;
  protected buttonText = this.appWording.buttonShowRecommendations;
  protected filteredRecommendations: Recommendation[] = [];
  protected riskScore = 0;

  get isMobileViewport(): boolean {
    return this.viewportService.isMobile();
  }

  get isTabletViewport(): boolean {
    return this.viewportService.isTablet();
  }

  get isDesktopViewport(): boolean {
    return this.viewportService.isDesktop();
  }

  get appWording() {
    return APP_WORDING_BY_LANGUAGE[this.selectedLanguage];
  }

  get currentDirection() {
    return LANGUAGE_DIRECTIONS[this.selectedLanguage];
  }

  get questions(): Question[] {
    return QUESTIONS_BY_LANGUAGE[this.selectedLanguage].map(question => ({
      id: question.id,
      label: question.text,
      options: [this.appWording.answerYes, this.appWording.answerNo],
    }));
  }

  get currentSectionTitle(): string {
    return this.showQuestions
      ? this.appWording.evaluationTitle
      : this.appWording.recommendationsTitle;
  }

  get isAllQuestionsAnswered(): boolean {
    return this.questions.length === this.answers.length;
  }

  onAnswerSelected(event: AnswerSelection): void {
    this.answers = this.evaluationService.upsertAnswer(this.answers, event);
  }

  onLanguageSelected(language: SupportedLanguage): void {
    this.selectedLanguage = language;
    this.restartEvaluation();
  }

  showRecommendations(): void {
    const evaluationResult = this.evaluationService.evaluate(
      this.answers,
      RECOMMENDATIONS_BY_LANGUAGE[this.selectedLanguage],
    );
    this.riskScore = evaluationResult.riskScore;
    this.filteredRecommendations = evaluationResult.filteredRecommendations;
    this.showQuestions = false;
    this.buttonText = this.appWording.buttonRestartEvaluation;
  }

  restartEvaluation(): void {
    this.showQuestions = true;
    this.answers = [];
    this.filteredRecommendations = [];
    this.riskScore = 0;
    this.buttonText = this.appWording.buttonShowRecommendations;
  }
}
