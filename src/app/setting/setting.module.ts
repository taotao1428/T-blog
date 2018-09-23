import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { ProfileComponent } from './profile/profile.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { SettingComponent } from './setting.component';
import {SettingRoutingModule} from './setting-routing.module';

@NgModule({
  imports: [SharedModule, SettingRoutingModule],
  declarations: [BasicComponent, ProfileComponent, BlacklistComponent, SettingComponent]
})
export class SettingModule {}
