import {ApiService} from './api.service';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {User} from '../model';
import {distinctUntilChanged, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

/**
 * 用于用户的管理
 */
@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  constructor(private apiService: ApiService) {
  }

  /**
   * 检查用户是否处于登录状态，在应用刚启动的时候就检查
   */
  populate() {
    this.apiService.get('/user')
      .subscribe(data => this.setAuth(data.user), err => this.purgeAuth());
  }

  /**
   * 设置登录用户的信息
   * @param user
   */
  setAuth(user: User) {
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  /**
   * 将用户登录信息设为空
   */
  purgeAuth() {
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  /**
   * 登录或者注册，成功之后，设置用户状态
   * @param type
   * @param credentials
   */
  attemptAuth(type, credentials): Observable<User> {
    const route = (type === 'login') ? '/login' : '';
    return this.apiService.post('/users' + route, {user: credentials})
      .pipe(map(data => {
        this.setAuth(data.user);
        return data.user;
      }));
  }

  /**
   * 获得当前登录的用户
   */
  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  /**
   * 更新用户信息
   * @param user
   */
  update(user): Observable<User> {
    return this.apiService
      .put('/user', {user})
      .pipe(map(data => {
        this.currentUserSubject.next(data.user);
        return data.user;
      }));
  }

}
