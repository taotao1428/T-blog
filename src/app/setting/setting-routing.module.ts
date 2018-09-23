import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingComponent} from './setting.component';
import {BasicComponent} from './basic/basic.component';
import {ProfileComponent} from './profile/profile.component';
import {BlacklistComponent} from './blacklist/blacklist.component';

const routing: Routes = [
  {
    path: '',
    component: SettingComponent,
    children: [
      {path: '', redirectTo: 'basic'}, // 由设置主页面自动跳转到第一个子页面
      {path: 'basic', component: BasicComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'blacklist', component: BlacklistComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routing)],
  exports: [RouterModule]
})
export class SettingRoutingModule {}
