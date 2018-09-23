import {Component, Input, OnChanges, SimpleChange, SimpleChanges} from '@angular/core';

export let TEXT_BTN_META = {
  selector: 'app-text-btn',
  templateUrl: './text-btn.component.html',
  styleUrls: ['./text-btn.component.css']
};

@Component(TEXT_BTN_META)
export class TextBtnComponent implements OnChanges {
  static SELECTION_CHANGE_EVENT: string = 'selectionchange';
  @Input()
  command: string; // 命令
  @Input()
  title: string; // 鼠标hover弹出的提示
  @Input()
  iconName: string; // 图标名称
  @Input()
  name: string; // 如果没有图标显示的值

  @Input()
  editor: any; // 编辑器

  active: boolean = false; // 命令是否已激活
  disabled: boolean = true; // 命令是否禁止执行

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editor) {
      this.init();
    }
  }

  init() {
    this.editor.addListener(TextBtnComponent.SELECTION_CHANGE_EVENT, () => {
      const state = this.editor.queryCommandState(this.command),
            value = this.editor.queryCommandValue(this.command);
      this.disabled = state === -1;
      this.active = this.isActive(state, value);
    });
  }
  isActive(state: number, value: any): boolean {
    // 如果是没有value值，只需要判断是否已经执行就可以。否者需要判断值也相等
    return state === 1;
  }

  // 点击执行
  onClick() {
    if (this.editor) {
      this.exec();
    }
  }

  // 执行命令， 子组件可覆盖该方法
  exec(): void {
    this.editor.execCommand(this.command);
  }
}
