import {TextBaseDialogComponent} from '../text-base-dialog/text-base-dialog.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-text-link-dialog',
  templateUrl: './text-link-dialog.component.html',
  styleUrls: ['../text-base-btn/text-btn.component.css', './text-link-dialog.component.scss']
})
export class TextLinkDialogComponent extends TextBaseDialogComponent {
  command = 'link';
  iconName = 'link';
  title = '插入链接';

  show = false;
  url = '';

  init() {
    this.editor.addListener(TextLinkDialogComponent.SELECTION_CHANGE_EVENT, () => {
      const value = this.editor.queryCommandValue(this.command);
      this.disabled = false;
      this.active = !!value;
    });
  }
  do(): void {
    if (this.active) {
      this.editor.execCommand('unlink');
    } else {
      this.show = true;
      this.url = '';
    }
  }

  insert() {
    this.editor.execCommand(this.command, {
      href: this.url,
      target: '_blank'
    });
    this.show = false;
  }
}
