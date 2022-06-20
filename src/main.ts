import './polyfills';

import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ENVIRONMENT_INITIALIZER, importProvidersFrom } from '@angular/core';
import { UserService } from './user.service';
import {  RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './app/users/users.component';
import { HelloComponent } from './app/hello.component';
import { usersReducer } from './app/store/user.reducer';
import { StoreModule } from '@ngrx/store';
import { UpdateuserComponent } from './app/users/updateuser/updateuser.component';
import { AdduserComponent } from './app/users/adduser/adduser.component';
import { UserPipe } from './app/pipes/user.pipe';
import { DataService } from './app/data.service';
import { MetaService } from './app/meta.service';
const routes: Routes = [
  {
    path: 'user',
    component: UsersComponent
  },
  {
    path: 'home',
    component: HelloComponent,
  },
  {
    path: 'adduser',
    component: AdduserComponent,
  },
  {
    path: 'Updateuser',
    component: UpdateuserComponent,
  },
  {
    path:'dynamicform',
    loadComponent:()=>import('./app/wrapper-dynamic/wrapper-dynamic.component').then(x=>x.WrapperDynamicComponent)
  },
  {
    path: 'updatinguser',
    loadComponent: () =>
      import('./app/users/updatinguser/updatinguser.component').then(
        (com) => com.UpdatinguserComponent
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
bootstrapApplication(AppComponent, {
  providers: [
    UserService,DataService,MetaService,
    importProvidersFrom(
      HttpClientModule,
      ReactiveFormsModule,
      BrowserModule,
      FormsModule,
      RouterModule,
      RouterModule.forRoot(routes, { useHash: true }),
      StoreModule.forRoot({ users: usersReducer }, {}),
      UserPipe
    ),

    {
      provide: ENVIRONMENT_INITIALIZER,
      useValue: () => {
        console.log('ENVIRONMENT_INITIALIZER in main ts');
      },
      multi: true,
    },
  ],
}).catch((err) => console.error(err));
