import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { SubAdminManagentComponent } from './sub-admin-managent/sub-admin-managent.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './dialog/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AddSubAdminComponent } from './dialog/add-sub-admin/add-sub-admin.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserManagementComponent,
    SubAdminManagentComponent,
    LoginComponent,
    AddSubAdminComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTooltipModule
    
    
  ]
})
export class LayoutModule { }
