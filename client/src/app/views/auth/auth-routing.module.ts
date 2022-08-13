import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'signin'
  },
  {
    path:'signin',
    component: LoginComponent,
    data: {title: 'Página de login'}
  },
  {
    path:'signup',
    component: SignupComponent,
    data: {title: 'Página de cadastro'}
  },
  {
    path:'forbidden',
    component: ForbiddenComponent,
    data: {title: 'Não autorizado'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
