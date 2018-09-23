import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Notebook} from '../../core/model/notebook.model';
import {Note} from '../../core/model/note.model';

@Component({
  selector: 'app-note-manage',
  templateUrl: './note-manage.component.html',
  styleUrls: ['./note-manage.component.css']
})
export class NoteManageComponent implements OnInit, OnChanges {
  @Input()
  notebook: Notebook;
  @Input()
  notebooks: Notebook[];
  @Output()
  focusNote = new EventEmitter();
  constructor() { }

  currentNote: Note;

  // 是否处于加载笔记列表中
  loading = false;

  ngOnInit() {

  }

  /**
   * 监听笔记的变化进行笔记加载
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    // 如果notebook的notes为undefined说明还没有加载
    if (this.notebook !== undefined
      && this.notebook.notes === undefined) {
      this.loadNotes();
    } else {
      // 如果对象改变，需要重置currentNote
      if (changes.notebook.previousValue !== changes.notebook.currentValue) {
        this.currentNote = this.notebook.notes[0];
      }
    }

  }

  /**
   * 通过服务加载笔记
   */
  loadNotes(): void {
    this.loading = true;
    setTimeout(() => {
      this.notebook.notes = this.createNotes();
      this.currentNote = this.notebook.notes[0];
      this.loading = false;
    }, 1000);
  }

  /**
   * 添加一个笔记
   * @param note
   */
  addNote(note: Note) {
    this.notebook.notes.unshift(note);
    this.currentNote = note;
  }

  /**
   * 删除一个笔记
   * @param note
   */
  deleteNote(note: Note) {
    const index = this.notebook.notes.indexOf(note);
    this.notebook.notes.splice(index, 1);
    this.currentNote = this.notebook.notes[0];
  }

  /**
   * 将笔记移到另一个笔记本
   * @param note
   * @param notebook
   */
  moveNote(note: Note, notebook: Notebook) {
    this.deleteNote(note);
    notebook.notes.push(note);
  }

  createNotes(): Note[] {
    let i = 5;
    const notes: Note[] = [];
    while (i-- > 0) {
      const id = Math.round(Math.random() * 100);
      notes.push({
        id: id,
        slug: 'skdjhfjk' + id,
        seq: id,
        title: '笔记标题' + id,
        content: '笔记内容' + id,
        noteType: 1,
        notebookId: this.notebook.id,
        shared: Math.random() > 0.5
      });
    }
    return notes;
  }
}
