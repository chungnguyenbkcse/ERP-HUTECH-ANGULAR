import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';
import { ConfirmCodeComponent } from './confirm-code.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ngx-bootstrap';
import { ForgotService } from './forgot.service';
import { UsersService } from '@components/user/users.service';
import { UpdatePasswordComponent } from './update-password.component';
import { PasswordStrengthValidator } from '@core/validator/isPassword';
import { TokenService } from '../token.service';

@NgModule({
  imports: [
    CommonModule,
    ForgotRoutingModule,
    SharedModule, 
    RouterModule, 
    TooltipModule.forRoot(),
  ],
  providers: [ForgotService, UsersService, PasswordStrengthValidator],
  declarations: [ForgotComponent, ConfirmCodeComponent, UpdatePasswordComponent]
})
export class ForgotModule { }
