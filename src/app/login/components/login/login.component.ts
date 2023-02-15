import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any = FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  get f() { return this.loginForm.controls; }

  ngOnInit() {
    //Add User form validations
    this.loginForm = this.formBuilder.group({
      uesrName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    //True if all the fields are filled
    if (this.submitted) {
      console.log(this.loginForm.value);
      alert("Great!!");
    }

  }
}
