import { Component, AfterViewInit } from '@angular/core';

import jarvisWidgetsDefaults from  '@shared/widgets/widget.defaults';
import {ElementRef} from "@angular/core";

import 'smartadmin-plugins/smartwidgets/jarvis.widget.ng2.js'

declare var $: any;

@Component({

  selector: 'sa-widgets-grid',
  template: `
     <section id="widgets-grid" class="sortable-grid">
       <ng-content></ng-content>
     </section>
  `,
  styles: []
})
export class WidgetsGridComponent implements AfterViewInit {

  constructor(public el: ElementRef) {}

  ngAfterViewInit() {
      $('#widgets-grid', this.el.nativeElement).jarvisWidgets(jarvisWidgetsDefaults);
  }

}
