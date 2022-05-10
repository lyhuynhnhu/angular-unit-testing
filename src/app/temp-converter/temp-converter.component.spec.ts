import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';

import { TempConverterComponent } from './temp-converter.component';

describe('TempConverterComponent', () => {
  let component: TempConverterComponent;
  let fixture: ComponentFixture<TempConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TempConverterComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert C to F', () => {
    const celsius = fixture.debugElement.query(
      By.css('[data-testid="celsius-input"]')
    );
    celsius.nativeElement.value = '30';

    celsius.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const celsiusResult = fixture.debugElement.query(
      By.css('[data-testid="celsius-result"]')
    );
    expect(celsiusResult.nativeElement.textContent).toContain('86.00');
  });

  it('should convert F to C', () => {
    const fahrenheit = fixture.debugElement.query(
      By.css('[data-testid="fahrenheit-input"]')
    );
    fahrenheit.nativeElement.value = '86';

    fahrenheit.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const fahrenheitResult = fixture.debugElement.query(
      By.css('[data-testid="fahrenheit-result"]')
    );
    expect(fahrenheitResult.nativeElement.textContent).toContain('30.00');
  });
});
