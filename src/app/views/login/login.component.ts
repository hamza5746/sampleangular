import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup;

  constructor(public formBuilder:FormBuilder) { }

  ngOnInit() {
  }

}
