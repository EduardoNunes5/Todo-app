import { JwtService } from 'src/app/shared/services/jwt.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private jwtService: JwtService) { }

  ngOnInit(): void {
  }

  isLoggedIn():boolean {
    return this.jwtService.isLoggedIn();
  }

  logout(): void{
    this.jwtService.clear();
  }

}
