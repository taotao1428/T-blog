import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptor';

import {
  ApiService,
  AuthGuard,
  UserService
} from './service';
import {HttpModule} from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    AuthGuard,
    UserService
  ],
  declarations: []
})
export class CoreModule { }
