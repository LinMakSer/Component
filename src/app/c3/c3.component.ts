import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
  @Input() myTitle;
  @Output() returnText: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(someText) {
    const newTitle = this.myTitle + ' ' + someText;
    this.returnText.emit(newTitle);
  }

}
