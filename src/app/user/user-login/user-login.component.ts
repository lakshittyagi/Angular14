import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  login(form: NgForm) {
    console.log(form);
    // form.reset();
  }

  //Used declarative forms here in this component
}
100;
