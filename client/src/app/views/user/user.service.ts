import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CrudService } from "src/app/shared/services/crud.service";
import { environment } from "src/environments/environment";
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudService<User, number>{

  private baseUrl: string;

  constructor(protected _http: HttpClient) {
    super(_http, 'api/users');
    this.baseUrl = environment.apiUrl;
  }

  login(user: User): Observable<{token: string}> {
    return this._http.post<{token: string}>(this.baseUrl + 'api/authenticate', user);

  }



}
