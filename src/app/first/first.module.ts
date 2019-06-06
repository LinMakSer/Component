import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeService } from '../some.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // providers:  [SomeService]
})
export class FirstModule { 
  static forRoot(data: any): ModuleWithProviders {
    return {
      providers: [
        {
          provide: 'MY_SUPER_SERVICE',
          useValue: data,
          multi: true
        }
      ],
      ngModule: FirstModule
    }
  }
}
