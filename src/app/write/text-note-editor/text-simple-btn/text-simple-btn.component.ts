import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-simple-btn',
  templateUrl: './text-simple-btn.component.html',
  styleUrls: ['./text-simple-btn.component.css']
})
export class TextSimpleBtnComponent implements OnInit {
  @Input()
  iconName: string;
  @Input()
  title: string;
  @Input()
  name: string;
  constructor() { }

  ngOnInit() {
  }

}
