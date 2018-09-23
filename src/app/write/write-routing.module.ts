import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WriteComponent} from './write.component';
import {AuthGuard} from '../core/service';

const routes: Routes = [
  {
    path: '',
    component: WriteComponent,
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteRoutingModule {}
