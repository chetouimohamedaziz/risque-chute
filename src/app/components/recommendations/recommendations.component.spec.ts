import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RECOMMENDATIONS_WORDING } from '../../constants/recommendations-wording.constant';
import { RECOMMENDATION_MOCKS } from '../../mocks/recommendation.mock';
import { RecommendationsComponent } from './recommendations.component';

describe('RecommendationsComponent', () => {
  let component: RecommendationsComponent;
  let fixture: ComponentFixture<RecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    component.recommendations = RECOMMENDATION_MOCKS;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should render the recommendations list when data is provided', () => {
    component.recommendations = RECOMMENDATION_MOCKS;
    fixture.detectChanges();

    const items = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll('.recommendations-card__item'),
    );

    expect(items).toHaveLength(RECOMMENDATION_MOCKS.length);
    expect(items[0]?.textContent).toContain(RECOMMENDATION_MOCKS[0].text);
  });

  it('should render the empty message when there are no recommendations', () => {
    component.recommendations = [];
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('.recommendations-card__item')).toBeNull();
    expect(host.querySelector('.recommendations-card__empty')?.textContent).toContain(
      RECOMMENDATIONS_WORDING.emptyMessage,
    );
  });
});