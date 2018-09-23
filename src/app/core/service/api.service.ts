import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Result} from '../model/result.model';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}
  // 如果请求本身出现错误，直接抛出异常
  private formatErrors(error: any) {
    return throwError('网络或服务器错误');
  }
  // 用于过滤状态码非0，即有错误的请求，将他们转为错误
  private filter(data: Result): any {
    if (data.code !== 0) {
      throw data.msg;
    }
    return data.data;
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.api_url}${path}`, {params})
      .pipe(catchError(this.formatErrors), map(this.filter));
  }
  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body))
      .pipe(catchError(this.formatErrors), map(this.filter));
  }
  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.api_url}${path}`
    ).pipe(catchError(this.formatErrors), map(this.filter));
  }
  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors), map(this.filter));
  }
}
