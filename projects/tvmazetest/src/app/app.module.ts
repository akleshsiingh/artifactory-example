import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TvmazeModule } from 'tvmaze';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TvmazeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
