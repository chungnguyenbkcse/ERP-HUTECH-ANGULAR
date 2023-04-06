import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from "./forgot.component";
import { ConfirmCodeComponent } from './confirm-code.component';
import { UpdatePasswordComponent } from './update-password.component';

const routes: Routes = [
  {
    path: 'forgot-password',
    component: ForgotComponent
  }, 
  {
    path: 'confirm',
    component: ConfirmCodeComponent
  },
  {
    path: 'update-password',
    component: UpdatePasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ForgotRoutingModule { }
