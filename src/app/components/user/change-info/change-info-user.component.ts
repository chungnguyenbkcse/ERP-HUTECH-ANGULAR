import { Component, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { UsersService } from "../users.service";
import { Users } from "../users.model";

@Component({
    selector: 'change-info-user',
    styleUrls: ['./change-info-user.component.css'],    
    templateUrl: './change-info-user.component.html',
})
export class ChangeInfoUserComponent implements OnInit {
    private id: number = 0;
    private username: string = "";
    private fullname: string = "";
    private image: string = "";
    private selectedFile: File = null;
    private imageUrl: string = "";
    constructor(
        private service: UsersService,
        
    ) { }

    ngOnInit() {
        this.getData().then(value => {
            this.id = value.id;
            this.imageUrl = value.image;    
            this.username = value.username;
            this.fullname = value.fullname;
            this.image = value.image;
        });
    }


    private getData(): Promise<any> {
        return this.service.getData();
    }



    private async update(): Promise<any> {
        if (this.selectedFile != null) {
            const formData = new FormData();
            formData.append('image', this.selectedFile, this.selectedFile.name);
            return await this.service.uploadImage(formData, {
                id: this.id,
                username: this.username,
                fullname: this.fullname
            });
        }
        else {
            const user = new Users({
                id: this.id,
                username: this.username,
                fullname: this.fullname,
                image: this.image
            })
            return this.service.editUser(user);
        }   
    }

    private onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
        // Xử lý tệp tin ở đây

        if (this.selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(this.selectedFile);
        
            reader.onload = () => {
                this.imageUrl = reader.result as string;
            }
        }
    }
}