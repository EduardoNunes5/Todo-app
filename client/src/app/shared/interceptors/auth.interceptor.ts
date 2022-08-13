import { JwtService } from './../services/jwt.service';
import { Router } from '@angular/router';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

  constructor(private jwtService: JwtService,
    private router: Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.headers.get('No-Auth') === "true"){
      return next.handle(req.clone());
    }

    const token = this.jwtService.getToken();
    if(token){
      req = this.addToken(req, token);
    }
    return next.handle(req);
  }

  private addToken(req: HttpRequest<any>, token: any){

    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }

}
