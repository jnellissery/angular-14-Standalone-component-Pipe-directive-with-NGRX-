import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ControlComponent } from '../control/control.component';
import { ControlBase } from '../controls/control-base';
import { DataService } from '../data.service';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  imports: [ReactiveFormsModule, ControlComponent, CommonModule],
  standalone: true,
})
export class DynamicFormComponent implements OnChanges {
  @Input() meta: ControlBase[] = [];
  @Input() data: any = {};
  form!: FormGroup;
  payLoad = '';
  constructor(private metaService: MetaService) {}
  ngOnChanges() {
    console.log('onchange')
    this.form = this.metaService.toFormGroup(this.meta, this.data);
  }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    console.log(this.payLoad);
  }
}
