import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TokenService } from "@components/auth/token.service";
import { SharedModule } from "@shared/shared.module";
import { TooltipModule } from "ngx-bootstrap";
import { ChangeInfoUserComponent } from "./change-info/change-info-user.component";
import { UsersComponent } from "./users.component";
import { UsersService } from "./users.service";

@NgModule({
    imports: [
        SharedModule, RouterModule, TooltipModule.forRoot(),
    ],
    declarations: [ChangeInfoUserComponent, UsersComponent],
    exports: [ChangeInfoUserComponent, UsersComponent],
    providers: [TokenService, UsersService]
})
export class UsersModule {}