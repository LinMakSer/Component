import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
// import { SomeService } from './some.service';
import { FirstModule } from './first/first.module';
import { SecondModule } from './second/second.module';
import { SomeService } from './some.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    FirstModule.forRoot({
      test:"Hello world"
    }),
    SecondModule
    
  ],
  providers: [
    {
      provide: SomeService,
      useClass: SomeService
    },
    {
      provide: 'MY_SUPER_SERVICE',
      useValue: {value: 'Value from AppModule'},
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // constructor(private someService: SomeService) {
  //   console.log(this.someService)
  // }
 }
