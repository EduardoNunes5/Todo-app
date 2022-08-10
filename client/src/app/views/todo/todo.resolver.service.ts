import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Todo } from "./todo";
import { TodoService } from "./todo.service";

@Injectable()
export class TodoResolver implements Resolve<any> {

    constructor(private todoService: TodoService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Todo> {
        return this.todoService.findOne(route.params.todoId);
    }
}
