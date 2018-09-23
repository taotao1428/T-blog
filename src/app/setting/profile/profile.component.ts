import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserProfile} from '../../core/model/user-profile.model';
import {SettingRoutingModule} from '../setting-routing.module';
import {SettingComponent} from '../setting.component';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  loading = false;
  profile: UserProfile;
  saving = false;
  constructor(private fb: FormBuilder, private parent: SettingComponent, private message: NzMessageService) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      'gender': [2],
      'intro': [''],
      'website': ['']
    });
    this.loadProfile();
  }

  get changes() {
    const newVal = this.profileForm.value,
          changes = {};
    for (const [k, v] of Object.entries(newVal)) {
      if (v !== this.profile[k]) {
        changes[k] = v;
      }
    }
    return changes;
  }

  save() {
    const changes = this.changes;
    if (!Object.keys(this.changes).length) {
      this.message.success('保存成功');
      return;
    }
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
      Object.assign(this.profile, changes);
      this.message.success('保存成功');
    }, 1000);
    console.log(this.profileForm.value, this.profile);
  }

  loadProfile() {
    if (this.loading) {
      return;
    }
    if (this.parent.profile) {
      this.setProfile(this.parent.profile);
      return;
    }
    this.loading = true;
    setTimeout(() => {
      const profile = {
        gender: 0,
        intro: '一名研究生',
        website: 'http://sdfsdf'
      };
      this.setProfile(profile);
      this.parent.profile = profile;
      this.loading = false;
    }, 1000);
  }

  setProfile(profile) {
    this.profile = profile;
    this.profileForm.setValue(profile);
  }
}
