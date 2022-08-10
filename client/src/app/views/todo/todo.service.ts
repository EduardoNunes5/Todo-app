import { CrudService } from './../../shared/services/crud.service';
import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends CrudService<Todo, number>{

  constructor(protected _http: HttpClient) {
    super(_http, 'api/todos');
  }

}
