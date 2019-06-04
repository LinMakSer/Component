import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
  @Input() myTitle;
  @Output() returnText: EventEmitter<string> = new EventEmitter();

  constructor() {
    
   }

  ngOnInit() {
    
  }

  onReturnText(text) {
    this.returnText.emit(text);
  }


}
