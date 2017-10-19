import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';
import { UserEnrollComponent } from './user-enroll/user-enroll.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CheckInOutComponent,
    UserEnrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
