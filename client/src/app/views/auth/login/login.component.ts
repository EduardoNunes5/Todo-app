import { ToastrService } from 'ngx-toastr';
import { JwtService } from './../../../shared/services/jwt.service';
import { Router } from '@angular/router';
import { UserService } from './../../user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  itemForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private jwtService: JwtService,
    private router: Router,
    private notificationService: ToastrService) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    const reqObject = this.formData();
    if(this.itemForm.valid){
      this.userService.login(reqObject)
        .subscribe(({token}) =>{
          this.jwtService.setToken(token);
          this.router.navigate(['todos']);
        }, ({error}) => this.notificationService.error(error.message)
        )
    }

  }

  formData() {
    return {
      username: this.itemForm.value.username,
      password: this.itemForm.value.password
    }
  }

}
