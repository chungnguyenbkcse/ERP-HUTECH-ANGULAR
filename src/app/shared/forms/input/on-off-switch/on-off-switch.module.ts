import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnOffSwitchComponent } from '@shared/forms/input/on-off-switch/on-off-switch.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [OnOffSwitchComponent],
  exports: [OnOffSwitchComponent]
})
export class OnOffSwitchModule { }
