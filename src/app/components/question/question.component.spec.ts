import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { QUESTION_MOCK } from '../../mocks/question.mock';
import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;
    component.question = QUESTION_MOCK;
    component.currentIndex = 0;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the question number and label', () => {
    const host = fixture.nativeElement as HTMLElement;

    expect(host.querySelector('.question-number')?.textContent?.trim()).toBe('1');
    expect(host.querySelector('.question-text')?.textContent).toContain(QUESTION_MOCK.label);
  });

  it('should render one button per option', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');

    expect(buttons).toHaveLength(QUESTION_MOCK.options.length);
    expect(buttons[0]?.textContent).toContain('Oui');
    expect(buttons[1]?.textContent).toContain('Non');
  });

  it('should emit the selected answer and mark the button as selected', () => {
    const emitSpy = jest.spyOn(component.answered, 'emit');
    const yesButton = fixture.debugElement.queryAll(By.css('button'))[0];

    yesButton.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.selectedOption).toBe(true);
    expect(emitSpy).toHaveBeenCalledWith({ questionId: QUESTION_MOCK.id, answer: true });
    expect(yesButton.nativeElement.classList).toContain('option-button--selected');
  });
});