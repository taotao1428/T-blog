import {Component, OnInit} from '@angular/core';
import {UserService} from './core/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'T-blog';
  constructor(private userService: UserService) {

  }
  // 进入应用的时候，检查用户的情况
  ngOnInit() {
    this.userService.populate();
  }
}
