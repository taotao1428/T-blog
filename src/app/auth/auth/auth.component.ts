import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: [':host{display: flex; height: 100vh; justify-content: center; align-items: center; background-color: #f1f1f1}']
})
export class AuthComponent implements OnInit {
  authType: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
    });
  }
}
