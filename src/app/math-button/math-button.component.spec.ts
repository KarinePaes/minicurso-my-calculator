import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathButtonComponent } from './math-button.component';

describe('MathButtonComponent', () => {
  let component: MathButtonComponent;
  let fixture: ComponentFixture<MathButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
