import { Component, OnInit } from '@angular/core';
import {UserBasic} from '../../core/model/user-basic.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';
import {SettingComponent} from '../setting.component';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  userBasic: UserBasic;
  loading = false;
  basicForm: FormGroup;
  saving = false;
  private _oldVal: any;
  private _formFields: string[] = ['nickname', 'preferredNoteType', 'acceptStrangerMessage', 'emailNotify'];
  constructor(private fb: FormBuilder,
              private message: NzMessageService,
              private route: ActivatedRoute, private router: Router, private parent: SettingComponent) {
  }

  ngOnInit() {
    this.basicForm = this.fb.group({
      'nickname': ['', [Validators.required]],
      'preferredNoteType': [0],
      'acceptStrangerMessage': [true],
      'emailNotify': [0]
    });
    this.loadUserBasic();
  }

  save() {
    const changes = this.changes(this.basicForm.value);
    if (Object.keys(changes).length === 0) {
      this.message.success('保存成功！');
      return;
    }
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
      this.message.success('保存成功');
      this.storeChanges(changes);
    }, 1000);
  }

  storeChanges(changes) {
    Object.assign(this._oldVal, changes);
    Object.assign(this.userBasic, changes);
  }

  /**
   * 判断是否修改了值
   */
  changes(value: {[key: string]: any}): {[key: string]: any} {
    const changes = {};
    for (const field of this._formFields) {
      if (this._oldVal[field] !== value[field]) {
        changes[field] = value[field];
      }
    }
    return changes;
  }

  /**
   * 记载用户的信息
   */
  loadUserBasic() {
    if (this.loading) {
      return;
    }
    // 如果父级组件中含有数据矩直接使用
    if (this.parent.userBasic) {
      this.setUserBasic(this.parent.userBasic);
      return;
    }
    this.loading = true;
    setTimeout(() => {
      const userBasic = {
        avatar: 'https://upload.jianshu.io/users/upload_avatars/8702999/50f5b8c5-e2b2-499b-aa95-59cd5859c93f.jpg',
        nickname: '涛涛',
        email: '1320238094@qq.com',
        emailConfirmed: true,
        preferredNoteType: 1,
        acceptStrangerMessage: true,
        emailNotify: 0
      };
      this.parent.userBasic = userBasic;
      this.setUserBasic(userBasic);
      this.loading = false;
    }, 2000);
  }

  setUserBasic(userBasic) {
    this.userBasic = userBasic;
    this._oldVal = this.initVal();
    this.basicForm.setValue(this._oldVal);
  }

  /**
   * 获得表单的初始值
   */
  initVal() {
    const val = {};
    for (const field of this._formFields) {
      val[field] = this.userBasic[field];
    }
    return val;
  }
}
