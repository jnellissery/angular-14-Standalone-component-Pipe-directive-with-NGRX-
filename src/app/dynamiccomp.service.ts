import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class DynamiccompService {
  public name:string;

  constructor() {

    console.log('from service')
   }

}