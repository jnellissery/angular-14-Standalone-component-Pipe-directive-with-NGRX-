import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserDirective } from './directives/user.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

import { UserPipe } from './pipes/user.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,
    CommonModule,
    UserDirective,
    UserPipe,
    FormsModule,
    DynamicFormComponent,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'dynamic-form-app';

  constructor() {}
}
