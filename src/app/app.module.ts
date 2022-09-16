import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorModule } from './pages/navigator/navigator.module';
import { SummaryModule } from './pages/summary/summary.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SummaryModule,
    NavigatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
