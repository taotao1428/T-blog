import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Notebook} from '../../core/model/notebook.model';
import {Note} from '../../core/model/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input()
  notebooks: Notebook[];
  @Input()
  notebook: Notebook;
  @Input()
  note: Note;
  @Output()
  delete = new EventEmitter();
  @Output()
  move = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  publicize(): void {
    this.note.shared = true;
  }

  moveTo(target: Notebook): void {
    this.move.emit({note: this.note, notebook: target});
  }

  showLogs(): void {
    alert('打开日志');
  }

  openNote(): void {
    alert('打开文章页面');
  }

  deleteNote(): void {
    this.delete.emit(this.note);
  }
}
