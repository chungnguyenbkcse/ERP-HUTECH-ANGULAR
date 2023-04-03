import {Injectable} from '@angular/core';

const jwt_decode = require('jwt-decode');
import {JsonApiService} from "@core/api/json-api.service";
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { UrlVariable } from '@util/variable';
import { HttpClient } from '@angular/common/http';
import { TokenService } from '@components/auth/token.service';

@Injectable()
export class UserService {

  public user: Subject<any>;

  private readonly URL_LOGIN = UrlVariable.URL_LOGIN + '/api';

  public userInfo = {
    username: 'Guest'
  };

  constructor(
    private _http: HttpClient,
    private _tokenService: TokenService,
  ) {
    this.user = new Subject();
  }

  getLoginInfo():Observable<any> {
    /* return this.jsonApiService.fetch('/user/login-info.json')
      .do((user)=>{
        this.userInfo = user;
      this.user.next(user)
    }) */

    // Giải mã JWT
    const token = this._tokenService.getToken().toString();

    const decodedToken = jwt_decode(token);
    console.log(decodedToken)
    const username = decodedToken.username;

    return this._http.post(`${this.URL_LOGIN}/user/get-user`, {
      username: username
    });
  }

}
