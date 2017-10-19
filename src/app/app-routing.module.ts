import { UserEnrollComponent } from './user-enroll/user-enroll.component';
import { CheckInOutComponent } from './check-in-out/check-in-out.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'inout',
    component: CheckInOutComponent
  },
  {
    path: 'enroll',
    component: UserEnrollComponent
  },
  { path: '',   redirectTo: '/enroll', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
