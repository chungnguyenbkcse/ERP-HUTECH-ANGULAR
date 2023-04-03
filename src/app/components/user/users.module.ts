import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TokenService } from "@components/auth/token.service";
import { SharedModule } from "@shared/shared.module";
import { TooltipModule } from "ngx-bootstrap";
import { ChangeInfoUserComponent } from "./change-info/change-info-user.component";
import { UsersComponent } from "./users.component";
import { UsersService } from "./users.service";
import { ChangePasswordUserComponent } from "./change-password/change-password-user.component";
import { PasswordStrengthValidator } from "@core/validator/isPassword";

@NgModule({
    imports: [
        SharedModule, RouterModule, TooltipModule.forRoot(),
    ],
    declarations: [ChangeInfoUserComponent, UsersComponent, ChangePasswordUserComponent],
    exports: [ChangeInfoUserComponent,UsersComponent, ChangePasswordUserComponent],
    providers: [TokenService, UsersService, PasswordStrengthValidator]
})
export class UsersModule {}