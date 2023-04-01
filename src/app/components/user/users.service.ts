import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { UrlVariable } from '@util/variable'
import { Subject } from 'rxjs';
const jwt_decode = require('jwt-decode');
import { TokenService } from '@components/auth/token.service';
import { Users } from './users.model';


/**
 * @author Chung
 * cập nhật profile cho nhân viên
 */
@Injectable()
export class UsersService {

    /* 
    url cho việc chứng thực
    */
    private readonly URL_LOGIN = UrlVariable.URL_LOGIN + '/api';

    public image: string = ''
    public hoTen: string = ''
    public NhanVienID: string = ''
    public email: any

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    public user: Subject<any>;
    constructor(
        private _tokenService: TokenService,
        private _http: HttpClient,
    ) {
        this.user = new Subject();
    }

    /* 
    kiểm tra login hay chưa
    */
    public editUser(dto) {
        const token = this._tokenService.getToken();
        return this._http
            .post(`${this.URL_LOGIN}/user/update`, {
                id: dto.id,
                username: dto.username,
                fullname: dto.fullname,
                image: dto.image
            })
            .toPromise()
            .then(res => {
                alert('Successfully changed information!')
                return res
            })
    }

    public async uploadImage(formData, dto) {
        let imageUrl = "";
        this._http
            .post(`${this.URL_LOGIN}/uploads`, formData)
            .subscribe(
                (response: any) => {
                    imageUrl = response.url;
                    const user = new Users({
                        id: dto.id,
                        username: dto.username,
                        fullname: dto.fullname,
                        image: response.url
                    });
                    return this.editUser(user);
                },
                (error) => {
                    console.log(error);
                }
            );
        console.log(imageUrl)
        return imageUrl
    }

    /**
     * @author Chung
     * thay đổi mật khẩu
     */

    changePassword(newPassword: string) {
        const token = this._tokenService.getToken();
        return this._http
            .post(`${this.URL_LOGIN}/change-password`, {
                newpassword: newPassword
            })
            .toPromise()
            .then(res => res)
    }


    /**
     * @author Chung
     * lấy data
     */

    getData = (): Promise<any> => {
        // Tạo một đối tượng JwtHelperService

        // Giải mã JWT
        const token = this._tokenService.getToken().toString();

        const decodedToken = jwt_decode(token);
        console.log(decodedToken)
        const username = decodedToken.username;
        return this._http.post(`${this.URL_LOGIN}/user/get-user`, {
            username: username
        })
            .toPromise()
            .then(res => {
                return res;
            });
        // Do something with decodedToken

    }
}
