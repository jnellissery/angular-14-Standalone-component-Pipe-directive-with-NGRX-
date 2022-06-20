import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlBase } from '../control-base';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
  imports :[ReactiveFormsModule],
  standalone:true
})
export class TextInputComponent implements OnInit {
  @Input() meta: ControlBase;
  @Input() fg: FormGroup;


  constructor() { }

  ngOnInit() {
  }

}