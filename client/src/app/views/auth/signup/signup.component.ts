import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../user/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  itemForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private notificationService: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    const reqObj = this.formData();
    if(this.itemForm.valid){
      this.userService.save(reqObj)
        .subscribe(response => {
          this.router.navigate(['auth', 'signin']);
          this.notificationService.success(`Usuário ${reqObj.username} cadastrado com sucesso!`);
        })
    }


  }

  formData(){
    return {
      username: this.itemForm.value.username,
      password: this.itemForm.value.password,
      email: this.itemForm.value.email
    }
  }

}
