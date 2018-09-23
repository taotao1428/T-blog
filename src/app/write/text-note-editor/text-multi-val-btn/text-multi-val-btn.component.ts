import {TextBtnComponent} from '../text-base-btn/text-btn.component';
import {Component, Input} from '@angular/core';

/**
 * 具有多个值的按钮，比如段落，字体，字体大小等
 */
@Component({
  selector: 'app-text-multi-val-btn',
  templateUrl: '../text-base-btn/text-btn.component.html',
  styleUrls: ['../text-base-btn/text-btn.component.css']
})
export class TextMultiValBtnComponent extends TextBtnComponent {
  @Input()
  value: string;

  isActive(state: number, value: any): boolean {
    return value === this.value;
  }

  exec(): void {
    this.editor.execCommand(this.command, this.value);
  }
}
