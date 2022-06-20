import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxComponent } from '../controls/checkbox/checkbox.component';
import { ControlBase } from '../controls/control-base';
import { DropdownComponent } from '../controls/dropdown/dropdown.component';
import { LabelComponent } from '../controls/label/label.component';
import { TextInputComponent } from '../controls/text-input/text-input.component';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  imports:[CommonModule, TextInputComponent, LabelComponent,DropdownComponent, CheckboxComponent],
  standalone:true
})
export class ControlComponent implements OnInit {
@Input() control:ControlBase;
@Input() fg:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}