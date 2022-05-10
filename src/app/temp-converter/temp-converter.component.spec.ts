import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { render, screen, fireEvent } from '@testing-library/angular';

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

  it('shou;d', () => {
    const celsius = fixture.debugElement.query(
      By.css('[data-testid="celsius"]')
    );
    // fireEvent.change(celsius.nativeElement, { target: { value: '30' } });
    celsius.nativeElement.value = '30';
    // Dispatch input event
    celsius.nativeElement.dispatchEvent(new Event('input'));
    expect(screen.getByText('sdfá')).toBeDefined();
  });
});

describe('TempConverterComponent With Testing Library', () => {
  it('should convert C to F', async () => {
    await render(TempConverterComponent, {
      imports: [SharedModule],
    });

    const celsius = screen.getByPlaceholderText(/celsius/i);
    fireEvent.change(celsius, { target: { value: '30' } });
    console.log(celsius);
    // expect(celsius.).toBeDefined();
  });
});
