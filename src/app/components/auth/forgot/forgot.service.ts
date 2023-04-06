import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UrlVariable } from "@util/variable";

@Injectable()
export class ForgotService {
    private url = `${UrlVariable.URL_TODO}/api/user`;
    constructor(private http: HttpClient) { }

    create = (email): Promise<any> => {
        return this.http.post(`${this.url}/reset-password`, {
            email: email
        })
            .toPromise()
            .then(res => {
                return res;
            })
            .catch((error) => {
                alert('Not found email! Please enter email again!')
            })
    }


    confirm = (email, code): Promise<any> => {
        return this.http.post(`${this.url}/check-code`, {
            email: email,
            code: code
        })
            .toPromise()
            .then(res => {
                return res;
            })
            .catch((error) => {
                alert('Not found email or Code wrong! Please enter email or code again!')
            })
    }
}