import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteUserSuccessMsg } from '../../store/user.action';
import { UsersState } from '../../store/user.reducer';
import { currentuserSelector } from '../../store/user.select';
import { IUsers } from '../../usermodel';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class UpdateuserComponent implements OnInit {
  selectuser: IUsers;
  constructor(private router: Router, private store: Store<UsersState>) {
    this.store
      .select(currentuserSelector)
      .subscribe((user) => (this.selectuser = user));
  }

  ngOnInit() {}
  back() {
    this.router.navigate(['user']);
  }
  update() {
    this.router.navigate(['updatinguser']);
  }
  Delete(userid) {
    this.store.dispatch(deleteUserSuccessMsg({ id: userid }));
    this.router.navigate(['user']);
  }
}
