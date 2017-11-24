import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SightingsComponent } from './sightings/sightings.component';
import { InputComponent } from './input/input.component';

const appRoutes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'sightings', component: SightingsComponent },
  { path: '', component: SightingsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    SightingsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
