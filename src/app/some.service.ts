import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable(
//   {
//   providedIn: "root"
// }
)

export class SomeService {

  private name: string = 'Maks';

  constructor(private httpClient: HttpClient) {
    console.log('create')
  }

  public getName(): string {
    return this.name;
  }

}
