import { Component, Inject, Injector, OnInit } from '@angular/core';
import { injectortoken } from '../../../main';
import { UserService } from '../../../user.service';
import { ExperimentaluserService } from '../experimentaluser.service';
//This is for Angular14 routing we can set  service specific to component and it is child using router with new property provider:[{provide:'',existinclass:''}] 
@Component({
  selector: 'app-experimental-users',
  templateUrl: './experimental-users.component.html',
  styleUrls: ['./experimental-users.component.css']
  
})
export class ExperimentalUsersComponent implements OnInit {
  customInjector!:Injector;
  constructor(
  private injector:Injector
  ) {
    this.customInjector = Injector.create({
      providers: [
        { provide: "jojo", useClass:ExperimentaluserService,  deps: [] },
      ],
      parent: this.injector,
    });
  }

  ngOnInit() {
    const svc= this.customInjector.get("jojo");
    svc.getUserinfo().subscribe((x) => console.log(x));
  }
}
