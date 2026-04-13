import { Component, EventEmitter, HostBinding, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AnswerSelection, Question } from '../../models';
import { ViewportService } from '../../services/viewport.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, LayoutModule, MatButtonModule, MatCardModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  private readonly viewportService = inject(ViewportService);

  @Input() question!: Question;
  @Input() currentIndex: number = 0;
  @Output() answered = new EventEmitter<AnswerSelection>();

  selectedOption: boolean | null = null;

  @HostBinding('class.viewport-mobile')
  get isMobileViewport(): boolean {
    return this.viewportService.isMobile();
  }

  @HostBinding('class.viewport-tablet')
  get isTabletViewport(): boolean {
    return this.viewportService.isTablet();
  }

  @HostBinding('class.viewport-desktop')
  get isDesktopViewport(): boolean {
    return this.viewportService.isDesktop();
  }

  onAnswer(answer: boolean): void {
    this.selectedOption = answer;
    this.answered.emit({
      questionId: this.question.id,
      answer,
    });
  }
}
