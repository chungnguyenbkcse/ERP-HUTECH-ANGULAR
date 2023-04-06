import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ForgotService } from './forgot.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styles: []
})
export class ForgotComponent implements OnInit {

  private email: string = ""

  constructor(
    private router: Router,
    private service: ForgotService,
  ) { }

  ngOnInit() {
    this.email = ""
  }

  async submit(event){
    event.preventDefault();
    const res = await this.service.create(this.email);
    if (res != undefined) {
      this.router.navigate(['/confirm'], { queryParams: { email: this.email } });
    }
  }
}
