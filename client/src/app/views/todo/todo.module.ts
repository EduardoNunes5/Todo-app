import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoChangeComponent } from './todo-change/todo-change.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { TodoResolver } from './todo.resolver.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TodoChangeComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [TodoService, TodoResolver]
})
export class TodoModule { }
