import { Component, Input, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <button (click)='showuserdetails()'>User Details</button>
  `,
  styles: [`h1 { font-family: Lato; }`],
  standalone: true,
})
export class HelloComponent {
  @Input() name: string;
  
  constructor( private router:Router) {
    this.name=  'Angular ' + VERSION.major;
  
  }
  showuserdetails(){
    this.router.navigate(['user']);

  }
}
