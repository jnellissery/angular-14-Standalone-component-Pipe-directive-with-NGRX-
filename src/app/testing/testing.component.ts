import { Component, Inject, Input, OnInit } from '@angular/core';
import { DynamiccompService } from '../dynamiccomp.service';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  @Input()
   name:string;
  constructor(@Inject('JOJO')private svc:DynamiccompService) { }

  ngOnInit() {
     this.name=this.svc.name;
  }

}