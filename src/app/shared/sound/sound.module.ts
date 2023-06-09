import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SoundService} from "@shared/sound/sound.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SoundService]
})
export class SoundModule {
  static forRoot() {
    return {
      ngModule: SoundModule,
      providers: [SoundService]
    }
  }
}
