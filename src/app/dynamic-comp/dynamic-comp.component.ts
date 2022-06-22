import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  InjectionToken,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { injectortoken } from '../../main';
import { DynamiccompService } from '../dynamiccomp.service';
import { TestingComponent } from '../testing/testing.component';
const injectiontoken = new InjectionToken<string>('APP-token');

// const MY_SERVICE_TOKEN = new InjectionToken<DynamiccompService>('Manually constructed MyService', {
//   providedIn: 'root',
//   factory: () => new DynamiccompService()
// });
@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.css'],
  standalone: true,
  imports: [CommonModule],
 
 
})
export class DynamicCompComponent implements OnInit {
  @ViewChild('placeholder', { read: ViewContainerRef, static: true })
  placeholder!: ViewContainerRef;
  public testingcomp = TestingComponent;
  constructor(@Inject('JOJO') private svc: DynamiccompService) {}

  async ngOnInit() {
    // let svc= Injector.g(MY_SERVICE_TOKEN);
    console.log('from component')
    this.svc.name = 'JOJO';
    // this.placeholder.clear();
    //const {TestingComponent}= await import('../testing/testing.component')
    //const componentRef=  this.placeholder.createComponent(TestingComponent);
    //componentRef.instance.name="This is dynamic componenet";
  }
}
