import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from "@angular/forms";
import { HttpClientModule }     from "@angular/common/http"
import { RouterModule, Routes } from '@angular/router';

import { routes }     from "./routes/routes";


import { AppComponent } from './app.component';
import { HomeComponent } from "./pages/home/home.component"


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
