import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { routing } from '@components/auth/auth.routing'
import { AuthComponent } from '@components/auth/auth.component'
import { AuthService } from '@components/auth/auth.service'
import { ManageStateService } from '@shared/manage-state.service'
import { TokenService } from '@components/auth/token.service'
import { ForgotComponent } from './forgot/forgot.component'

@NgModule({
  imports: [CommonModule, routing],
  declarations: [AuthComponent, ForgotComponent],
  providers: [AuthService, ManageStateService, TokenService]
})
export class AuthModule {}
