import { JwtService } from 'src/app/shared/services/jwt.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Injectable } from '@angular/core';



@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: JwtService,
    private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.router.navigate(['auth/signin']);
      return false;
    }

  }

}
