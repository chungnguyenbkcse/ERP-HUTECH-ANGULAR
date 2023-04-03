import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LoginInfoComponent } from '@shared/user/login-info/login-info.component'
import { LogoutComponent } from '@shared/user/logout/logout.component'
import { AuthService } from '@components/auth/auth.service'
import { TokenService } from '@components/auth/token.service'

@NgModule({
  imports: [CommonModule],
  declarations: [LoginInfoComponent, LogoutComponent],
  exports: [LoginInfoComponent, LogoutComponent],
  providers: [AuthService, TokenService],
})
export class UserModule {}
