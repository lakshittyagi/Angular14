import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  // Sign Up Form
  signupForm: FormGroup = new FormGroup({
    // first argument to form control is the initial value and then we can set validators.
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  constructor(private $router: Router) {}

  ngOnInit(): void {}

  login() {
    // this.$router.navigate([],);
  }
  // Used Reactive Forms in this Module

  signUp() {
    console.log(this.signupForm);
  }
}
