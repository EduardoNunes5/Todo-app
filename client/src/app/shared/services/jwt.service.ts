import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({providedIn: 'root'
})
export class JwtService{

  constructor(private jwtHelper: JwtHelperService,
    private router: Router){}


  public setRoles(roles:[]){
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): []{
    const roles = localStorage.getItem('roles') || '[]';
    return JSON.parse(roles);
  }

  public setToken(token: string){
    localStorage.setItem('jwt_token', token);
    this.setUser();
  }

  private setUser(){
    const decodedToken = this.getDecodedJwt();
    const user = {
      username: decodedToken.sub,
      id: decodedToken.id,
    }
    localStorage.setItem('user', JSON.stringify(user));
  }

  public isTokenExpired() {
    const token = this.getToken();
    return token ? this.jwtHelper.isTokenExpired(token) : true;
  }

  private getDecodedJwt(){
    const token = this.jwtHelper.tokenGetter();
    if(token){
      return this.jwtHelper.decodeToken(token);
    }
    return undefined;
  }

  public getToken(){
    return this.jwtHelper.tokenGetter();
  }

  public clear(){
    localStorage.clear();
  }

  public logout(){
    localStorage.clear();
    this.router.navigate(['/', 'auth']);

  }

  public isLoggedIn(): boolean{
    return this.getToken() != null;
  }

}
