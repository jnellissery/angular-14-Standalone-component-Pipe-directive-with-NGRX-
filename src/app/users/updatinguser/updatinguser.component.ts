import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteUserSuccessMsg, updateUserSuccessMsg } from '../../store/user.action';
import { UsersState } from '../../store/user.reducer';
import { currentuserSelector } from '../../store/user.select';
import { IUsers } from '../../usermodel';

@Component({
  selector: 'app-updatinguser',
  templateUrl: './updatinguser.component.html',
  styleUrls: ['./updatinguser.component.css'],
  imports:[ReactiveFormsModule],
  standalone: true,
})
export class UpdatinguserComponent implements OnInit {
  fg: FormGroup;
  selecteduser:IUsers;
  constructor(private fb: FormBuilder,private store:Store<UsersState>, private router: Router) {}

  ngOnInit() {
    this.fg = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
    this.setvalue();
  }
  setvalue() {
    this.store.select(currentuserSelector).subscribe(x=>{
      this.selecteduser=x;
      this.fg.controls['title'].setValue(x.title)
      this.fg.controls['body'].setValue(x.body)
    })
  }
  updateuser(){

    this.store.dispatch(updateUserSuccessMsg({user:{body:this.fg.controls['body'].value,title:this.fg.controls['title'].value,id:this.selecteduser.id,UserId:+this.selecteduser.id}}))

  this.router.navigate(['user'])
  }
  cancel(){
    this.router.navigate(['user'])
  }
}
