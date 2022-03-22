import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)},
  {path:'home',loadChildren:()=>import('./layout/layout.module').then(m=>m.LayoutModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
