import { Component, ViewChild } from '@angular/core';
import { SomeService } from './some.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [SomeService]
})
export class AppComponent {
 
  constructor(private someService: SomeService) {
    console.log(this.someService);
  }



}