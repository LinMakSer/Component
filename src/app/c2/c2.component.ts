import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  @Input() myTitle;
  @Output() returnText: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onReturnText(text) {
    this.returnText.emit(text);
  }

}
