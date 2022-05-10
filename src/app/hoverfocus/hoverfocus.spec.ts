import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HoverFocusDirective } from './hoverfocus.directive';

@Component({
  template: `<input type="text" hoverfocus />`,
})
export class HoverFocusComponent {}

describe('Directive: HoverFocus', () => {
  let component: HoverFocusComponent;
  let fixture: ComponentFixture<HoverFocusComponent>;
  let inputEl: DebugElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HoverFocusComponent, HoverFocusDirective],
    }).compileComponents();
    fixture = TestBed.createComponent(HoverFocusComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
