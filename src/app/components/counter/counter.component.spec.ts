import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponent } from './counter.component';

const startCount = 123;

describe('Counter Component', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.startCount = startCount;
    fixture.detectChanges();
  });

  it('increments the count', () => {
    // Query
    const incrementButton = fixture.debugElement.query(
      By.css('[data-testid="increment-button"]')
    );

    // Act: Click on the increment button & Trigger the change
    incrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    const countOutput = fixture.debugElement.query(By.css('strong'));
    expect(countOutput.nativeElement.textContent).toBe(String(startCount + 1));
  });

  it('decrements the count', () => {
    // Act
    const decrementButton = fixture.debugElement.query(
      By.css('[data-testid="decrement-button"]')
    );
    decrementButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    const countOutput = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );
    expect(countOutput.nativeElement.textContent).toBe(String(startCount - 1));
  });

  it('resets the count', () => {
    const resetInput = fixture.debugElement.query(
      By.css('[data-testid="reset-input"]')
    );

    resetInput.nativeElement.value = '10';
    // Dispatch input event
    resetInput.nativeElement.dispatchEvent(new Event('input'));

    const resetButton = fixture.debugElement.query(
      By.css('[data-testid="reset-button"]')
    );
    resetButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const countOutput = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );
    expect(countOutput.nativeElement.textContent).toBe('10');
  });

  it('does not reset if the value is not a number', () => {
    const value = 'not a number';

    // Act
    const resetInput = fixture.debugElement.query(
      By.css('[data-testid="reset-input"]')
    );
    resetInput.nativeElement.value = value;
    resetInput.nativeElement.dispatchEvent(new Event('input'));

    const resetButton = fixture.debugElement.query(
      By.css('[data-testid="reset-button"]')
    );
    resetButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    // Assert
    const countOutput = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );
    expect(countOutput.nativeElement.textContent).toBe(String(startCount));
  });

  it('shows the start count', () => {
    const countOutput = fixture.debugElement.query(
      By.css('[data-testid="count"]')
    );
    expect(countOutput.nativeElement.textContent).toBe(String(startCount));
  });
});
