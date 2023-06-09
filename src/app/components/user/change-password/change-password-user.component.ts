import { Component, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { UsersService } from "../users.service";
import { PasswordStrengthValidator } from "@core/validator/isPassword";
import { TokenService } from "@components/auth/token.service";
const jwt_decode = require('jwt-decode');

@Component({
    selector: 'change-password-user',
    styleUrls: ['./change-password-user.component.css'],    
    templateUrl: './change-password-user.component.html',
})
export class ChangePasswordUserComponent implements OnInit {
    private newPassword: string = "";
    private reNewPassword: string = "";
    private oldPassword: string = "";
    private isError: boolean = false;
    private message: string = "";
    constructor(
        private service: UsersService,
        private _tokenService: TokenService,
        private checkPassword: PasswordStrengthValidator,
    ) { }

    ngOnInit() {
        this.isError = false;
        this.message = "";
    }

    private async update(): Promise<any> {
        if (this.oldPassword == "") {
            this.isError = true;
            this.message = "Please enter old password!";
        }
        else if (this.newPassword == "") {
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
            const token = this._tokenService.getToken().toString();

            const decodedToken = jwt_decode(token);
            console.log(decodedToken)
            const username = decodedToken.username;
            return this.service.changePassword(username, this.oldPassword, this.newPassword)
                    .then(value => {
                        alert('Change password successfull!')    
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