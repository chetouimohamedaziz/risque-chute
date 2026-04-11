import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { RECOMMENDATIONS_WORDING } from '../../constants/recommendations-wording.constant';
import { Recommendation } from '../../models/recommendation.model';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {
  @Input({ required: true }) recommendations: Recommendation[] = [];
  emptyMessage = RECOMMENDATIONS_WORDING.emptyMessage;
}