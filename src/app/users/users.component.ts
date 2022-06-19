import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { UserService } from '../../user.service';
import {
  getUsersSuccessMsg,
  selecteUserSuccessMsg,
} from '../store/user.action';
import { UsersState } from '../store/user.reducer';
import { usersSelector } from '../store/user.select';
import { IUsers } from '../usermodel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  imports: [CommonModule,FormsModule],
  standalone: true,
})
export class UsersComponent implements OnInit {
  user$: Observable<IUsers[]>;
  title = 'sample-app';
  constructor(
    private usersvc: UserService,
    private router: Router,
    private store$: Store<UsersState>
  ) {
    this.store$
      .select(usersSelector)
      .subscribe((user) => (this.user$ = of(user)));
  }

  ngOnInit() {
    if (!this.usersvc.user.value.length) {
      setTimeout(() => {
        this.usersvc.getUserinfo().subscribe((x) => {
          this.usersvc.user.next(x);
          this.store$.dispatch(getUsersSuccessMsg({ users: x }));
        });
      }, 500);
    }

  }
  showedetails(selectedrow: IUsers) {
    this.store$.dispatch(selecteUserSuccessMsg({ id: selectedrow.id }));
    this.router.navigate(['Updateuser']);
  }

}
