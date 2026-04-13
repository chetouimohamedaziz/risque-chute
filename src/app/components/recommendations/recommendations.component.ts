import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, HostBinding, Input, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import {
  RECOMMENDATIONS_WORDING_BY_LANGUAGE,
  SupportedLanguage,
} from '../../constants/wording.constant';
import { Recommendation } from '../../models';
import { ViewportService } from '../../services/viewport.service';
import { getRiskClass, getRiskLevel } from '../../utils/risk.utils';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, LayoutModule, MatCardModule],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {
  private readonly viewportService = inject(ViewportService);

  @Input({ required: true }) recommendations: Recommendation[] = [];
  @Input() score = 0;
  @Input() language: SupportedLanguage = 'fr';

  @HostBinding('class.viewport-mobile')
  get isMobileViewport(): boolean {
    return this.viewportService.isMobile();
  }

  get wording() {
    return RECOMMENDATIONS_WORDING_BY_LANGUAGE[this.language];
  }

  get emptyMessage() {
    return this.wording.emptyMessage;
  }

  get scoreLabel() {
    return this.wording.scoreLabel;
  }

  get totalQuestions() {
    return this.wording.totalQuestions;
  }

  get recommendationsTitle() {
    return this.wording.recommendationsTitle;
  }

  get riskLevel() {
    return getRiskLevel(this.score);
  }

  get riskMessage(): string {
    return this.wording.riskMessages[this.riskLevel];
  }

  get riskEmoji(): string {
    return this.wording.riskEmojis[this.riskLevel];
  }

  get riskClass(): string {
    return getRiskClass(this.riskLevel);
  }
}