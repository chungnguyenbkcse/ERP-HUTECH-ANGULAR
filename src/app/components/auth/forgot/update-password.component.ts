import { Component, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { PasswordStrengthValidator } from "@core/validator/isPassword";
import { UsersService } from "@components/user/users.service";
import { ActivatedRoute, Router } from "@angular/router";
import { TokenService } from "../token.service";

@Component({
    selector: 'update-password',
    styleUrls: ['./update-password.component.css'],    
    templateUrl: './update-password.component.html',
})
export class UpdatePasswordComponent implements OnInit {
    private newPassword: string = "";
    private reNewPassword: string = "";
    private isError: boolean = false;
    private message: string = "";
    private email: string = ""
    constructor(
        private service: UsersService,
        private router: Router,
        private route: ActivatedRoute,
        private checkPassword: PasswordStrengthValidator,
    ) { }

    ngOnInit() {
        this.isError = false;
        this.message = "";
        this.email = this.route.snapshot.queryParams['email'];
    }

    private async update(): Promise<any> {
        if (this.newPassword == "") {
            this.isError = true;
            this.message = "Please enter new password!";
        }
        else if (this.reNewPassword == "") {
            this.isError = true;
            this.message = "Please enter re new password!";
        }
        else if (this.newPassword != this.reNewPassword) {
            this.isError = true;
            this.message = "New password and re new password not math! Please enter again!";
        }
        else if (this.checkPassword.validate(this.newPassword)) {
            return this.service.updatePassword(this.email, this.newPassword)
                    .then(value => {
                        alert('Change password successfull!')
                        this.router.navigate(['/admin/login/login']);    
                    })
                    .catch(error => {
                        this.isError = true;
                        this.message = error.error.message;
                        console.log(error)
                    })
        }
        else {
            this.isError = true;
            this.message = this.checkPassword.defaultMessage();
        }
        return;
    }

}