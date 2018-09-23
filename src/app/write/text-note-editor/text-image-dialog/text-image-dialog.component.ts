import {TextBaseDialogComponent} from '../text-base-dialog/text-base-dialog.component';
import {Component} from '@angular/core';
import {TEXT_BTN_META} from '../text-base-btn/text-btn.component';

@Component({
  selector: 'app-text-image-dialog',
  templateUrl: '../text-base-btn/text-btn.component.html',
  styleUrls: ['../text-base-btn/text-btn.component.css']
})
export class TextImageDialogComponent extends TextBaseDialogComponent {
  command = 'insertimage';
  iconName = 'image';
  title = '插入图片';
  do(): void {
    const url = 'https://upload.jianshu.io/users/upload_avatars/8702999/50f5b8c5-e2b2-499b-aa95-59cd5859c93f.jpg';
    this.editor.execCommand(this.command, {src: url});
  }
}
