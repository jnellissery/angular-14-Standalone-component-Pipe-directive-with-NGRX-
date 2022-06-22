import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUsers } from '../usermodel';

@Injectable()
export class ExperimentaluserService {
  constructor() {}
  getUserinfo(): Observable<IUsers> {
    return of(<IUsers>{
      id: 100,
      UserId: 100,
      title: 'Experimental user Title',
      body: 'Experiment user body',
    });
  }
}
