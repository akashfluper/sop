import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LeftSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],

  exports:[
    HeaderComponent,
    LeftSidebarComponent  
  ]
})
export class SharedModule { }
