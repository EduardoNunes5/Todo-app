import { HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from './../todo.service';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from '../todo';
import { Page } from 'src/app/shared/components/pagination/page';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos?: Page<Todo>;

  loading: boolean = false;

  currentPage: number = 0;

  totalPages: number = 0;

  updated: boolean = false;

  constructor(
    private todoService: TodoService,
    private notificationService: ToastrService) { }

  ngOnInit(): void {
    this.performSearch(0, 10);
  }

  performSearch(page: number, size: number) {
    this.loading = true;
    const p = new HttpParams().set('page', page).set('size', size);
    this.todoService.findAllPaginated({ params: p })
      .subscribe(data => {
        this.todos = data;
        this.currentPage = data.number ? data.number : this.currentPage;
        this.totalPages = this.todos.totalPages || 0;
        this.loading = false;
      })

  }

  onDeleteClick(id: number = 0) {
    this.loading = true;
    this.todoService.delete(id).subscribe(data => {
      if (this.todos)
        this.todos.content = this.todos.content?.filter(todo => todo.id !== id);
      this.notificationService.success("Todo removida com sucesso");
      this.loading = false;
    })
  }

  onGoTo(event: number) {
    this.currentPage = event - 1;
    this.performSearch(this.currentPage, 10);
  }

  onNext(event: number) {
    this.currentPage = event + 1;
    this.performSearch(this.currentPage, 10);
  }

  onPrevious(event: number) {
    this.currentPage = event - 1;
    this.performSearch(this.currentPage, 10);
  }

}
