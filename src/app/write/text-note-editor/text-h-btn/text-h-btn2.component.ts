import {TextMultiValBtnComponent} from '../text-multi-val-btn/text-multi-val-btn.component';
import {Component, OnInit} from '@angular/core';


/**
 * 段落按钮
 */
@Component({
  selector: 'app-text-h-btn2',
  templateUrl: '../text-base-btn/text-btn.component.html',
  styleUrls: ['../text-base-btn/text-btn.component.css']
})
export class TextHBtn2Component extends TextMultiValBtnComponent implements OnInit {
  command: string = 'paragraph';


  ngOnInit() {
    this.title = '标题' + this.value.toUpperCase();
    this.name = this.value.toUpperCase();
  }

  // 如果已经执行H回退到p
  exec(): void {
    this.editor.execCommand(this.command, this.active ? 'p' : this.value);
  }
}
