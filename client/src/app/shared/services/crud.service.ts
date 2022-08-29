import { Page } from './../components/pagination/page';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export class CrudService<T, ID> {

	constructor(
		protected http: HttpClient,
		protected base: string
	) {
    this.base = environment.apiUrl + base;
   }

  public findOne(id: ID): Observable<T>{
    return this.http.get<T>(this.base + '/' + id);
  }

  public findAll(): Observable<T[]>{
    return this.http.get<T[]>(this.base);
  }

  public findAllPaginated(options: {params: HttpParams}): Observable<Page<T>>{
    return this.http.get<Page<T>>(this.base, options);
  }

  public save(item: T): Observable<T>{
    return this.http.post<T>(this.base, item);
  }

  public put(id: ID, item: T): Observable<T> {
    return this.http.put<T>(this.base + '/' + id, item);
  }

  public delete(id: ID): Observable<void> {
    return this.http.delete<void>(this.base + '/' + id);
  }
}
