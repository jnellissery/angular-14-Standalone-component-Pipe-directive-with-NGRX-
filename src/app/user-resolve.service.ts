import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { IUsers } from './usermodel';

@Injectable()
export class UserResolveService implements Resolve<IUsers> {
  constructor(private service: UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const selectedrow = this.service.selectedbehaviourget;
    return selectedrow;
  }
}
