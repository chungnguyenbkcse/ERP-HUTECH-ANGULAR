import { Component, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { UserService } from "@shared/user";

@Component({
    selector: 'change-info-user',
    styleUrls: ['./change-info-user.component.css'],    
    templateUrl: './change-info-user.component.html',
})
export class ChangeInfoUserComponent implements OnInit {
    
    constructor(
        private service: UserService
    ) { }

    ngOnInit() {
    }


}