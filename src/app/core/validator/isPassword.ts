import { Injectable } from '@angular/core';

@Injectable()
export class PasswordStrengthValidator {
    validate(password: string) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    }

    defaultMessage() {
        return 'Password is too weak. It must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, and one number.';
    }
}