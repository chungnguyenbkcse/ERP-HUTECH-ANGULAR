import { Component, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { UsersService } from "../users.service";

@Component({
    selector: 'change-info-user',
    styleUrls: ['./change-info-user.component.css'],    
    templateUrl: './change-info-user.component.html',
})
export class ChangeInfoUserComponent implements OnInit {
    private username: string = "hello";
    private fullname: string = "hello";
    private image: string = "";
    constructor(
        private service: UsersService
    ) { }

    ngOnInit() {
        this.getData().then(value => {
            this.username = value.username;
            this.fullname = value.fullname;
            this.image = value.image;
        });
    }


    private getData(): Promise<any> {
        return this.service.getData();
    }
}