import './polyfills';

import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  ENVIRONMENT_INITIALIZER,
  importProvidersFrom,
  InjectionToken,
} from '@angular/core';
import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './app/users/users.component';
import { HelloComponent } from './app/hello.component';
import { usersReducer } from './app/store/user.reducer';
import { StoreModule } from '@ngrx/store';
import { UpdateuserComponent } from './app/users/updateuser/updateuser.component';
import { AdduserComponent } from './app/users/adduser/adduser.component';
import { UserPipe } from './app/pipes/user.pipe';
import { DataService } from './app/data.service';
import { MetaService } from './app/meta.service';
import { ExperimentalUsersComponent } from './app/users/experimental-users/experimental-users.component';
import { ExperimentaluserService } from './app/users/experimentaluser.service';
import { DynamicCompComponent } from './app/dynamic-comp/dynamic-comp.component';
import { CommonModule } from '@angular/common';
import { DynamiccompService } from './app/dynamiccomp.service';
import { Product } from './app/DI-usefactory/product';
import { ProductsComponent } from './app/DI-usefactory/products/products.component';
import { ProductService } from './app/DI-usefactory/product.service';
import { FakeProductService } from './app/DI-usefactory/fake-product.service';
import { LoggerService } from './app/DI-usefactory/logger.service';
export const injectortoken = new InjectionToken<string>('DYN-SVC');
export function resolveProductService(USE_FAKE,LoggerService,FUNC) {
  return USE_FAKE
    ? new FakeProductService(FUNC)
    : new ProductService(LoggerService);
}
const routes: Routes = [
  {
    path: 'user',
    component: UsersComponent,
  },
  {
    path: 'experimentaluser',
    component: ExperimentalUsersComponent,
    // component: ExperimentalUsersComponent,
    //{ provide: injectortoken, useClass: ExperimentaluserService }
    providers: [],
  },{
    path:'products',
    component:ProductsComponent,
    providers:[
      {provide: LoggerService, useClass: LoggerService },
      { provide: 'USE_FAKE', useValue: false },
      {   provide: 'FUNC',
          useValue: () => {return 'hello';}},
      {
        provide:ProductService,
        useFactory:resolveProductService,
        deps:['USE_FAKE',LoggerService,'FUNC']
      }
  ]

  },

  {
    path: 'home',
    component: UsersComponent,
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
    path: 'dynamiccomp',
    component: DynamicCompComponent,
  },
  {
    path: 'dynamicform',
    loadComponent: () =>
      import('./app/wrapper-dynamic/wrapper-dynamic.component').then(
        (x) => x.WrapperDynamicComponent
      ),
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
    { provide: 'JOJO', useClass: DynamiccompService },
    UserService,
    DataService,
    MetaService,

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
