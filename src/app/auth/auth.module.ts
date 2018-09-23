import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {SharedModule} from '../shared/shared.module';
import {AuthRoutingModule} from './auth-routing.module';
import {NoAuthGuard} from './no-auth-guard.service';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent, AuthComponent],
  providers: [NoAuthGuard]
})
export class AuthModule { }
