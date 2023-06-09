import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MorrisGraphComponent } from '@shared/graphs/morris-graph/morris-graph.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MorrisGraphComponent],
  exports: [MorrisGraphComponent],
})
export class MorrisGraphModule { }
