import {TextBtnComponent} from '../text-base-btn/text-btn.component';

/**
 * 所有对话按钮需要实现do方法
 */
export abstract class TextBaseDialogComponent extends TextBtnComponent {
  // 将exec方法转给do方法，
  exec(): void {
    this.do();
  }
  abstract do(): void;
}
