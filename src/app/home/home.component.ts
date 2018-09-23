import {Component, OnInit} from '@angular/core';
import {HashLocationStrategy, LocationStrategy, Location} from '@angular/common';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.style.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}, HashLocationStrategy]
})
export class HomeComponent implements OnInit {
  notebookId = '';
  noteId = '';
  hashPath: HashPath;
  constructor(private location: Location, private location2: Location) {

  }

  ngOnInit() {
    console.log(this.location === this.location2);
    console.log(this.location.path());
    this.hashPath = new HashPath(this.location);
    this.hashPath.param.subscribe((param) => {
      this.notebookId = param.notebookId;
      this.noteId = param.noteId;
    });
  }

  go() {
    this.hashPath.setAll(this.notebookId, this.noteId);
  }
  back() {
    this.location.back();
  }
  forward() {
    this.location.forward();
  }
}

class HashPath {
  private _param = {notebookId: undefined, noteId: undefined};
  param = new BehaviorSubject(this._param);
  constructor(private location: Location) {
    this.parse();
    this.param.next(this._param);
    // 监听路由的变化
    this.location.subscribe((data) => {
      console.log(data);
      if (data.type === 'popstate') {
        this.parse();
        this.param.next(this._param);
      }
    });
  }
  setNotebookId(notebookId) {
    this._param.notebookId = notebookId;
    this.writeHash();
  }

  setNoteId(noteId) {
    this._param.noteId = noteId;
    this.writeHash();
  }

  setAll(notebookId, noteId) {
    this._param.notebookId = notebookId;
    this._param.noteId = noteId;
    this.writeHash();
  }

  writeHash() {
    this.location.go(['notebooks', this._param.notebookId, 'notes', this._param.noteId].join('/'));
  }



  parse() {
    const path = this.location.path();
    const regx = /^(notebooks\/([^/]+)(\/notes\/([^/]+))?)?$/;
    const result = path.match(regx);
    if (result == null) {
      this._param.notebookId = undefined;
      this._param.noteId = undefined;
    } else {
      this._param.notebookId = result[2];
      this._param.noteId = result[4];
    }

    //   parts = path.split('/'),
    //   len = parts.length,
    //   params = {notebookId: null, noteId: null};
    // for (let i = 0, l = len / 2; i < l; i = 1 + 2) {
    //   if (parts[i] === 'notebooks') {
    //     params.notebookId = parts[i + 1];
    //   } else if (parts[i] === 'notes') {
    //     params.noteId = parts[i + 1];
    //   }
    // }
    // return params;
  }
}

