import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'todos', pathMatch: 'full'
  },
  {
    path:'todos',
    component: LayoutComponent,
    loadChildren: () => import('./views/todo/todo.module').then(m => m.TodoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
