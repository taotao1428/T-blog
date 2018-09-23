import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../core/service';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {Injectable} from '@angular/core';

/**
 * 主页检查用户是否登录
 */
@Injectable()
export class HomeAuthResolver implements Resolve<boolean> {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.userService.isAuthenticated.pipe(take(1));
  }
}
