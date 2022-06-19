import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUsers } from './app/usermodel';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUserinfo(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  selecteduser = new BehaviorSubject<IUsers>({
    id: 0,
    UserId: 0,
    title: '',
    body: '',
  });
  user = new BehaviorSubject<IUsers[]>([]);
  userobservable = this.user.asObservable();

  url: string = 'https://jsonplaceholder.typicode.com/posts';

  getusers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.url);
  }
  set userbehaviorsub(users: IUsers[]) {
    this.user.next(users);
  }
  get userbehaviorsubget() {
    return this.user.asObservable();
  }
  set selecteduserbehaviour(user: IUsers) {
    this.selecteduser.next(user);
  }
  get selectedbehaviourget(): Observable<IUsers> {
    return this.selecteduser.asObservable();
  }
  adduser(user: IUsers) {
    this.user.next([user, ...this.user.value]);
  }

  isLogged() {
    return false;
  }
}
