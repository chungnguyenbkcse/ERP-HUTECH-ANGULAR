import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UrlVariable } from "@util/variable";

@Injectable()
export class CustomtodoService {
    private url = `${UrlVariable.URL_TODO}/api/todo`;
    constructor(private http: HttpClient) { }

    getList = (): Promise<any> => {
        return this.http.get(`${this.url}/get-list`)
            .toPromise()
            .then(res => {
                return res;
            });
    }

    create = (content): Promise<any> => {
        return this.http.post(`${this.url}/create`, {
            content: content
        })
            .toPromise()
            .then(res => {
                return res;
            });
    }


    delete = (id): Promise<any> => {
        return this.http.delete(`${this.url}/delete/${id}`)
            .toPromise()
            .then(res => {
                return res;
            });
    }


    update = (dto): Promise<any> => {
        return this.http.put(`${this.url}/update`, {
            id: dto.id.toString(),
            checked: dto.checked,
            content: dto.content
        })
            .toPromise()
            .then(res => {
                return res;
            });
    }
}