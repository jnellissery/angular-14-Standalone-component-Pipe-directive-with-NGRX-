import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from '../../../user.service';
import { addUserSuccessMsg } from '../../store/user.action';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  imports: [ReactiveFormsModule,CommonModule ],
  standalone: true,
})
export class AdduserComponent implements OnInit {
  fg: FormGroup;
  constructor(
    private fb: FormBuilder,
    private svc: UserService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit() {
    this.fg = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required, Validators.maxLength(200)]],
    });
  }
  post() {
    this.store.dispatch(addUserSuccessMsg({ user: this.fg.value }));
    this.router.navigate(['user']);

    setTimeout(() => {
      this.svc.adduser(this.fg.value);
    });
  }

  navigateback() {
    this.router.navigate(['user']);
  }
}
