import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubAdminManagentComponent } from './sub-admin-managent/sub-admin-managent.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'user-management',component:UserManagementComponent},
  {path:'subadmin',component:SubAdminManagentComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
