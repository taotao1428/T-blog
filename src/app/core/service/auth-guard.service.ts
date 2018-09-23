import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import {UserService} from './user.service';
import {Injectable} from '@angular/core';

/**
 * 辅助路由，控制有些页面需要登录才能进入
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.router.navigate(['/login']);
    // 将这个作为一个拦截器，如果没有登录，进行跳转。可以添加参数，实现回跳
    return this.userService.isAuthenticated.pipe(take(1));
  }
}
