import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CrudService } from "src/app/shared/services/crud.service";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User, number>{

  constructor(protected _http: HttpClient) {
    super(_http, 'api/users');
  }

  login(user: User): Observable<{token: string}> {
    return this._http.post<{token: string}>('api/authenticate', user);

  }



}
