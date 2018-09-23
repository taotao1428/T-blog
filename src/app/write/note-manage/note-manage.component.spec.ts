import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteManageComponent } from './note-manage.component';

describe('NoteManageComponent', () => {
  let component: NoteManageComponent;
  let fixture: ComponentFixture<NoteManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
