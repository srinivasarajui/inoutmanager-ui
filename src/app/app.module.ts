import { MaterialModule } from './material.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WebCamComponent } from 'ack-angular-webcam';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';
import { UserEnrollComponent } from './user-enroll/user-enroll.component';


const firebaseConfig   = {
  apiKey: `AIzaSyADDmrWsgk4WWvdBlQND68Gu2W99vGNYwA`,
  authDomain: `newagent-gayibp.firebaseapp.com`,
  databaseURL: `https://newagent-gayibp.firebaseio.com`,
  projectId: `newagent-gayibp`,
  storageBucket: `newagent-gayibp.appspot.com`,
  messagingSenderId: `612899790435`
};

@NgModule({
  declarations: [
    AppComponent,
    WebCamComponent,
    DashboardComponent,
    CheckInOutComponent,
    UserEnrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
