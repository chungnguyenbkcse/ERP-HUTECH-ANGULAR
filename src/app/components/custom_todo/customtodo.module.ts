import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { TooltipModule } from "ngx-bootstrap";
import { CustomtodoComponent } from "./customtodo.component";
import { CustomtodoService } from "./customtodo.service";
import { ModalComponent } from "@components/modal/modal.component";
import { ModalService } from "@components/modal/modal.service";

@NgModule({
    imports: [
        SharedModule, RouterModule, TooltipModule.forRoot(),
    ],
    declarations: [CustomtodoComponent, ModalComponent],
    exports: [CustomtodoComponent],
    providers: [CustomtodoService, ModalService]
})
export class CustomtodoModule {}