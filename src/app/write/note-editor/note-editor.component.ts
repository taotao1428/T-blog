import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Note} from '../../core/model/note.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent implements OnInit {
  @Input()
  note: Note;
  subject: BehaviorSubject<Note>;

  // 是否处于正在保存的状态
  saving = false;
  // 等待保存的笔记
  waitNote: Note = null;
  // 文章处于正在发布状态
  publicizing = false;
  constructor() { }

  ngOnInit() {
    this.subject = new BehaviorSubject(null);
    this.subject.pipe(debounceTime(1000)).subscribe((note) => this._save(note));
  }

  /**
   * 通知保存数据
   */
  notify() {
    this.subject.next(this.note);
  }


  _save(note: Note) {
    // 如果上次保存没有结束，直接返回
    if (this.saving || note === null) {
      this.waitNote = note;
      return;
    }
    this.saving = true;
    console.log('保存文章中...');
    setTimeout(() => {
      this.saving = false;
      console.log('保存完成');
      if (this.waitNote !== null) {
        this._save(this.waitNote);
        this.waitNote = null;
      }
    }, 2000);
  }

  publicize() {
    if (this.publicizing) {
      return;
    }
    this.publicizing = true;
    console.log('发布中...');
    setTimeout(() => {
      console.log('发布成功');
      this.publicizing = false;
    }, 2000);
  }
}
