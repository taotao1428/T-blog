import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Notebook} from '../../core/model/notebook.model';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.component.html',
  styleUrls: ['./note-book.component.scss']
})
export class NoteBookComponent implements OnInit {
  @Input()
  notebook: Notebook;
  @Output()
  delNotebook = new EventEmitter();
  constructor() { }
  showTips = false;
  ngOnInit() {
  }

  del() {
    this.delNotebook.emit(this.notebook);
    this.showTips = false;
  }
  edit() {
    this.showTips = false;
    alert('编辑文集');
  }
}
