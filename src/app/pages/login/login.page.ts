import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from 'src/app/shared/form-validators';
import { REGISTERED_USERS } from './login-data';
import { UtilFunctions } from 'src/app/shared/commonFunc';
import { APP_PATH } from 'src/app/shared/constant';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
@ExceptionHandler
export class LoginPage implements OnInit {

  isFormSubmitted : boolean = false ;
  loginForm: FormGroup;
  constructor(
    private util : UtilFunctions
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, FormValidators.email])),
      password: new FormControl('',  Validators.compose([ Validators.required,FormValidators.password])),
    });
  }

  login() {
    this.isFormSubmitted = true ;
    if (this.loginForm.valid) {
      let formValues = this.loginForm.getRawValue();
      for(let user of REGISTERED_USERS)
      {
        if(user.email == formValues.email && user.password == formValues.password) {
          this.util.navigate(APP_PATH.USERS );
        }
      }
    }
  }

  navToForgotPassword()
  {
    this.util.navigate(APP_PATH.FORGOT_PASSWORD);
  }

}
