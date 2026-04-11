import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-step',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './question-step.component.html',
  styleUrl: './question-step.component.scss',
})
export class QuestionStepComponent {
  @Input() question!: Question;
  @Input() currentIndex: number = 0;
  @Output() answered = new EventEmitter<{ questionId: number; answer: string }>();

  selectedOption: string | null = null;

  onAnswer(answer: string): void {
    this.selectedOption = answer;
    this.answered.emit({
      questionId: this.question.id,
      answer,
    });
  }
}
