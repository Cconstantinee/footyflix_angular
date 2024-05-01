import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.css']
})
export class LoginTestComponent implements OnInit {

  user: User = { username: "", password: "" };

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      loginUsername: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9_]*')]],
      loginPassword: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z0-9_]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  loginSubmit() {
    if (this.loginForm.valid) {
      console.log("Login form submitted", this.loginForm.value.loginUsername, this.loginForm.value.loginPassword);
    } else {
      console.log("Login form invalid");
    }
  }

  registerSubmit() {
    if (this.registerForm.valid) {
      console.log("Registration form submitted", this.registerForm.getRawValue());
    } else {
      console.log("Registration form invalid");
    }
  }

}
