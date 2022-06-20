import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlBase } from '../controls/control-base';
import { DataService } from '../data.service';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { MetaService } from '../meta.service';

@Component({
  selector: 'app-wrapper-dynamic',
  templateUrl: './wrapper-dynamic.component.html',
  styleUrls: ['./wrapper-dynamic.component.css'],
  imports: [DynamicFormComponent, CommonModule],
  standalone: true,
})
export class WrapperDynamicComponent implements OnInit {
  meta!: ControlBase[];
  data!: any;
  constructor(
    private metaService: MetaService,
    private dataService: DataService
  ) {}
 async ngOnInit() {
    this.refresh();
  }
  async refresh() {
    this.data = await this.dataService.getData();
    this.meta = (await this.metaService.getMeta()) as ControlBase[];
  }
}
