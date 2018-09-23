import { Component, OnInit } from '@angular/core';
import {SettingComponent} from '../setting.component';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.scss']
})
export class BlacklistComponent implements OnInit {
  blackList: BlackItem[] = [];
  loading = false;
  constructor(private parent: SettingComponent) { }

  ngOnInit() {
    this.loadBlacklist();
  }

  loadBlacklist() {
    if (this.loading) {
      return;
    }
    if (this.parent.blacklist) {
      this.setBlacklist(this.parent.blacklist);
      return;
    }
    this.loading = true;
    setTimeout(() => {
      const blacklist = [
        {
          nickname: '问天',
          slug: '34sdfsdf',
          id: 32423
        }, {
          nickname: '何吴涛',
          slug: 'sdfsd',
          id: 324234
        }
      ];
      this.setBlacklist(blacklist);
      this.parent.blacklist = blacklist;
      this.loading = false;
    });
  }

  setBlacklist(blacklist) {
    this.blackList = blacklist;
  }

  remove(user) {
    const i = this.blackList.indexOf(user);
    if (i > -1) {
      this.blackList.splice(i, 1);
    }
  }
}

interface BlackItem {
  id: number;
  slug: string;
  nickname: string;
}
