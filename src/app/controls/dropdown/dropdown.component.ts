import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropDownControl } from './dropdown-control';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
})
export class DropdownComponent implements OnInit {
  @Input() meta!: DropDownControl;
  @Input() fg!: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
