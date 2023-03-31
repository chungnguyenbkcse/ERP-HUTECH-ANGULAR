import { Component, OnInit } from "@angular/core";
import { CustomtodoService } from "./customtodo.service";
import { Customtodo } from "./customtodo.model";
import * as _ from 'lodash';
import { ModalService } from "@shared/modal/modal.service";
import { moment } from "ngx-bootstrap/chronos/test/chain";

@Component({
    selector: 'customtodo',
    styleUrls: ['./customtodo.component.scss'],
    templateUrl: './customtodo.component.html',
})
export class CustomtodoComponent implements OnInit {
    private content: string = "";
    private content_edit: string = "";
    private list: Customtodo[];

    constructor(
        private service: CustomtodoService,
        private modalService: ModalService
    ) { }

    ngOnInit() {
        this.getList().then(value => {
            this.list = value
            return value;
        });
    }

    private getList(): Promise<any[]> {
        return this.service.getList()
    }


    private create(): Promise<void> {
        if (!this.content.trim()) {
            return;
        } 
        return this.service.create(this.content).then(result => {
            this.list.push(new Customtodo({
                id: result.id,
                content: this.content,
                time_update: Date.now()
            }))
            this.content = ""
        })
    }


    private delete(id, event: Event): Promise<void> {
        event.preventDefault();
        
        return this.service.delete(id).then(result => {
            _.remove(this.list, (elem) => elem.id == result.id)
        })
    }


    private openModal(id, event: Event) {
        event.preventDefault();
        this.content_edit = this.list.find(val => val.id == id).content;
        this.modalService.open('modal-1');
    }


    private edit(dto): Promise<void> {
        if (!dto.content.trim()) {
            return;
        }
        this.modalService.close();
        return this.service.update({
            id: dto.id,
            content: this.content_edit,
            checked: dto.checked
        }).then(result => {
            this.list.map((ele) => {
                if (ele.id = dto.id) {
                    ele.content = this.content_edit;
                    ele.time_update = moment(Date.now()).format("DD/MM/YYYY HH:mm:ss");
                }
                return ele;
            })
            this.content_edit = ""
        })
    }


    private checked(dto): Promise<void> {
        return this.service.update({
            id: dto.id,
            content: dto.content,
            checked: !dto.checked
        }).then(result => {
            this.list.map((ele) => {
                if (ele.id = dto.id) {
                    ele.checked = ele.checked == true ? false : true;
                    ele.time_update = moment(Date.now()).format("DD/MM/YYYY HH:mm:ss");
                    return ele;
                }
            })
        })
    }

    private close() {
        this.content_edit = ""
        this.modalService.close();
    }
}