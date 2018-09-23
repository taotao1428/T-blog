import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriteComponent } from './write.component';
import {SharedModule} from '../shared/shared.module';
import {WriteRoutingModule} from './write-routing.module';
import {AddNotebookComponent} from './add-notebook/add-notebook.component';
import {NoteBookComponent} from './note-book/note-book.component';
import {Notebook} from '../core/model/notebook.model';
import { NoteManageComponent } from './note-manage/note-manage.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteComponent } from './note/note.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { TextNoteEditorComponent } from './text-note-editor/text-note-editor.component';
import {TextBtnComponent} from './text-note-editor/text-base-btn/text-btn.component';
import {TextMultiValBtnComponent} from './text-note-editor/text-multi-val-btn/text-multi-val-btn.component';
import {TextHBtn2Component} from './text-note-editor/text-h-btn/text-h-btn2.component';
import {TextImageDialogComponent} from './text-note-editor/text-image-dialog/text-image-dialog.component';
import {TextLinkDialogComponent} from './text-note-editor/text-link-dialog/text-link-dialog.component';
import { TextSimpleBtnComponent } from './text-note-editor/text-simple-btn/text-simple-btn.component';
@NgModule({
  imports: [
    SharedModule,
    WriteRoutingModule
  ],
  declarations: [
    AddNotebookComponent,
    NoteBookComponent,
    WriteComponent,
    NoteManageComponent,
    AddNoteComponent,
    NoteComponent,
    NoteEditorComponent,
    TextNoteEditorComponent,
    TextBtnComponent,
    TextMultiValBtnComponent,
    TextHBtn2Component,
    TextImageDialogComponent,
    TextLinkDialogComponent,
    TextSimpleBtnComponent
  ]
})
export class WriteModule {}
