import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
@NgModule({
  declarations: [UserListComponent, UserLoginComponent, UserSignupComponent],
  imports: [UserRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [UserListComponent],
})
export class UserModule {}
