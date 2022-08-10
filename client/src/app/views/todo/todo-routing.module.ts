import { TodoChangeComponent } from './todo-change/todo-change.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoResolver } from './todo.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    data: { title: 'Listagem de todo'}
  },
  {
    path:'add',
    component: TodoChangeComponent,
    data: { title: 'Adicionar todo'},
  },{
    path: 'edit/:todoId',
    component: TodoChangeComponent,
    resolve: {todo: TodoResolver},
    data: { title: 'Editar todo'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
