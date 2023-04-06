import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ForgotService } from './forgot.service';

@Component({
    selector: 'app-confirm-code',
    templateUrl: './confirm-code.component.html',
    styles: []
})
export class ConfirmCodeComponent implements OnInit {

    private code: string = ""
    private email: string = ""
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private service: ForgotService,
    ) { }

    ngOnInit() {
        this.code = ""
        this.email = this.route.snapshot.queryParams['email'];
    }

    submit(event) {
        event.preventDefault();
        const res = this.service.confirm(this.email, this.code);
        if (res != undefined) {
            this.router.navigate(['/update-password'], { queryParams: { email: this.email } });
        }
    }
}
