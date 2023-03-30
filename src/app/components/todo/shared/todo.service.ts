import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlVariable } from "app/util/variable";


@Injectable()
export class TodoService {
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

  update = (todo): Promise<any> => {
    console.log(todo)
    return this.http.put(`${this.url}/update`, {
      id: todo.id.toString(),
      content: todo.content,
      checked: todo.checked,
    })
      .toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }

  delete = (id): Promise<any> => {
    console.log(id)
    return this.http.delete(`${this.url}/delete/${id}`)
      .toPromise()
      .then(res => {
        return res;
      });
  }
}
