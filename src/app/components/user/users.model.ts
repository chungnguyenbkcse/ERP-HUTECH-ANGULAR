import _ from "lodash";
import * as moment from "moment";

export class Users {
    public id: number;
    public username: string;
    public password: boolean;
    public fullname: string;
    public image: string;

    constructor(args?) {
        const {
            id = 0,
            username = "",
            password = false,
            fullname = "",
            image = "",
        } = args || {};
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.image = image;
    }
}