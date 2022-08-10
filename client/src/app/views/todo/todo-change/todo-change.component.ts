import { TodoService } from './../todo.service';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todo';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

interface Request {
  perform: Observable<Todo>,
  message: string
}

@Component({
  selector: 'app-todo-change',
  templateUrl: './todo-change.component.html',
  styleUrls: ['./todo-change.component.css']
})
export class TodoChangeComponent implements OnInit {


  itemForm!: FormGroup;

  private edit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router,
    private notificationService: ToastrService ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      const item: Todo = data.todo;

      this.edit = item ? true : false
      console.log(item);
      this.itemForm = this.fb.group({
        id: [item ? item.id : ''],
        title: [item? item.title : '', Validators.required],
        description: [item? item.description : '']
      })
    })
  }

  onSubmit(): void {
    const itemRequest = this.formData();

    if (this.itemForm.valid) {

      let method: Request;
      method = this.getMethodAndMessage(itemRequest, this.edit, itemRequest.id);
      method.perform.subscribe(data => {
        this.notificationService.success(method.message);
        this.router.navigate(['']);
      })

    }
  }

  getMethodAndMessage(data: any, edit: boolean, id?: number): Request{
    const method = edit ? 'edit' : 'save';
    const methods = {
      'save': {perform: this.todoService.save(data), message: 'todo criada com sucesso' },
      'edit': {perform: this.todoService.put(id || 0, data), message: 'todo editada com sucesso' }
    }
    return methods[method];
  }




  formData() {
    return {
      id: this.itemForm.value.id,
      title: this.itemForm.value.title,
      description: this.itemForm.value.description
    }
  }
}
