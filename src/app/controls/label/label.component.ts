import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LabelControl } from './label-control';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
  standalone:true
})
export class LabelComponent implements OnInit {
  @Input() meta!:LabelControl;
  fg:FormGroup;
  constructor() { }

  ngOnInit() {
  }

}