import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from '../../core/model/note.model';
import {Notebook} from '../../core/model/notebook.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {
  @Output()
  add = new EventEmitter();
  @Input()
  notebook: Notebook;

  constructor() { }

  ngOnInit() {
  }

  addNote() {
    this.add.emit(this.createNote());
  }

  createNote(): Note {
    const now = new Date(), year = now.getFullYear(), month = now.getMonth() + 1, day = now.getDay();
    const id = Math.round(Math.random() * 1000);
    return {
      id: id,
      slug: 'skdjhfjk' + id,
      seq: id,
      title: year + '-' + month + '-' + day,
      content: '',
      noteType: 0,
      notebookId: this.notebook.id,
      shared: Math.random() > 0.5
    };
  }

}
