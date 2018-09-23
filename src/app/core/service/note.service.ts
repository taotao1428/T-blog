import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Notebook} from '../model/notebook.model';

@Injectable()
export class NoteService {
  constructor(private apiService: ApiService) {

  }
  getNotebooks(): Observable<Notebook[]> {
    return this.apiService.get('/author/notebooks');
  }
}
