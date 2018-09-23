import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextNoteEditorComponent } from './text-note-editor.component';

describe('TextNoteEditorComponent', () => {
  let component: TextNoteEditorComponent;
  let fixture: ComponentFixture<TextNoteEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextNoteEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextNoteEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
