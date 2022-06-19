import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserDirective } from './directives/user.directive';
import { UserPipe } from './pipes/user.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, CommonModule, UserDirective, UserPipe,FormsModule],
  standalone: true,
})
export class AppComponent {
  title="jojo" ;
}
