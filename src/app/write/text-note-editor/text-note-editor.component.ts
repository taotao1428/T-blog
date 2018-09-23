import {AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NoteEditorComponent} from '../note-editor/note-editor.component';

declare let UM: any;

@Component({
  selector: 'app-text-note-editor',
  templateUrl: './text-note-editor.component.html',
  styleUrls: ['./text-note-editor.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TextNoteEditorComponent),
    multi: true
  }]
})
export class TextNoteEditorComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  // 用于保存内部数据
  _content: string;
  @Output()
  keyup = new EventEmitter();
  @Output()
  save = new EventEmitter();
  @Output()
  publicize = new EventEmitter();
  @Input()
  saving: boolean;
  @Input()
  publicizing: boolean;

  editor: any = null;
  ready = false;
  constructor(parent: NoteEditorComponent) {
    console.log(parent);
  }

  saveNote() {
    this.save.emit();
  }

  publicizeNote() {
    this.publicize.emit();
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    // 会抛出`ExpressionChangedAfterItHasBeenCheckedError` 异常，
    // 因为在editor值已经传达给子组件后却又发生了更新，会导致子组件获得过时的值
    // 解析：https://segmentfault.com/a/1190000013972657
    setTimeout(() => {
      this.editor = UM.getEditor('myEditor');

      this.editor.ready(() => {
        this.editor.body.addEventListener('keyup', () => {
          this.keyup.emit();
        });
        this.editor.setContent(this.content);
        this.ready = true;
        // 监听事件，修改content
        this.editor.addListener('contentChange', () => {
          this.content = this.editor.getContent();
        });
      });
    });
  }

  get content () {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
    this.propagateChange(value);
  }

  writeValue(value: any) {
    if (value === undefined || value === null) {
      value = '';
    }
    this.content = value;
    // 每次content改变都设置新的值
    if (this.ready) {
      this.editor.setContent(this.content);
    }
  }

  propagateChange(_: any) {

  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {

  }
}
