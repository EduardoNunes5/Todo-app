import { JwtService } from './services/jwt.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    LayoutComponent,
    LoadingComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthGuard, JwtService],
  exports: [LoadingComponent, PaginationComponent, LayoutComponent]
})
export class SharedModule { }
