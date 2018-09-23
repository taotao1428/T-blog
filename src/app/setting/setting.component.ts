import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserBasic} from '../core/model/user-basic.model';
import {UserProfile} from '../core/model/user-profile.model';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  userBasic: UserBasic = null;
  profile: UserProfile = null;
  blacklist = null;
  constructor(private router: Router, private route: ActivatedRoute) {

  }


  ngOnInit() {
    // console.log(this.route);
    // this.route.url.subscribe((data) => {console.log(data); });
    setTimeout(() => {
      // if (this.router.)
      // this.router.navigate(['setting/basic']);
    });
  }

}
