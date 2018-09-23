import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSimpleBtnComponent } from './text-simple-btn.component';

describe('TextSimpleBtnComponent', () => {
  let component: TextSimpleBtnComponent;
  let fixture: ComponentFixture<TextSimpleBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextSimpleBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSimpleBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
