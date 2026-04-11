import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { APP_WORDING } from './constants/app-wording.constant';
import { QUESTIONS } from './constants/questions.constant';
import { RECOMMENDATIONS } from './constants/recommendations.constant';
import { QuestionStepComponent } from './components/question-step/question-step.component';
import { Question } from './models/question.model';
import { Recommendation } from './models/recommendation.model';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, QuestionStepComponent, RecommendationsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly appWording = APP_WORDING;
  protected readonly questions: Question[] = QUESTIONS.map(q => ({
    id: q.id,
    label: q.text,
    options: ['Oui', 'Non']
  }));
  protected answers: { questionId: number; answer: string }[] = [];
  protected showQuestions = true;
  protected buttonText = this.appWording.buttonShowRecommendations;
  protected filteredRecommendations: Recommendation[] = [];

  get currentSectionTitle(): string {
    return this.showQuestions
      ? this.appWording.evaluationTitle
      : this.appWording.recommendationsTitle;
  }

  get isAllQuestionsAnswered(): boolean {
    return this.questions.length === this.answers.length;
  }

  onAnswerSelected(event: { questionId: number; answer: string }): void {
    const existingIndex = this.answers.findIndex(a => a.questionId === event.questionId);
    if (existingIndex !== -1) {
      this.answers[existingIndex] = event;
    } else {
      this.answers.push(event);
    }
  }

  showRecommendations(): void {
    this.filteredRecommendations = this.answers
      .filter(a => a.answer === 'Oui')
      .map(a => RECOMMENDATIONS.find(r => r.id === a.questionId))
      .filter((r): r is Recommendation => !!r);
    this.showQuestions = false;
    this.buttonText = this.appWording.buttonRestartEvaluation;
  }

  restartEvaluation(): void {
    this.showQuestions = true;
    this.answers = [];
    this.filteredRecommendations = [];
    this.buttonText = this.appWording.buttonShowRecommendations;
  }
}
