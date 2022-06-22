import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ControlBase } from './controls/control-base';
import { DataService } from './data.service';
import { UserDirective } from './directives/user.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamiccompService } from './dynamiccomp.service';
import { MetaService } from './meta.service';
import { UserPipe } from './pipes/user.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, CommonModule, UserDirective, UserPipe, FormsModule, DynamicFormComponent],
  standalone: true,
})
export class AppComponent  {
  title = 'dynamic-form-app';

  constructor(
  ) {}
 
}
