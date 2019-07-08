import {  ModuleWithProviders }
      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent }           from "../pages/home/home.component";

export const routes: Routes = [
  { path: '', pathMatch: 'full',  component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: '*', redirectTo: '' },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
