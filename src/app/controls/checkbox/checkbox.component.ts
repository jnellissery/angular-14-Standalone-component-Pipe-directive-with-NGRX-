import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckBoxControl } from './checkbox-control';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  imports:[ReactiveFormsModule],
  standalone:true
})
export class CheckboxComponent implements OnInit {
  @Input() meta!: CheckBoxControl;
  @Input() fg!: FormGroup;
  constructor() {}

  ngOnInit(): void {}
}