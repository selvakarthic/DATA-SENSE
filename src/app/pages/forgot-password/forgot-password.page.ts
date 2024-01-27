import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExceptionHandler } from 'src/app/shared/Exception_Handler';
import { UtilFunctions } from 'src/app/shared/commonFunc';
import { APP_PATH } from 'src/app/shared/constant';
import { FormValidators } from 'src/app/shared/form-validators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.css'],
})
@ExceptionHandler
export class ForgotPasswordPage implements OnInit {

  forgotPasswordForm: FormGroup;
  OTPForm: FormGroup;
  resetPasswordForm: FormGroup;
  isShowForgotPassword : boolean = true ;
  isShowOTP : boolean = false ;
  isShowResetPassword : boolean = false ;
  isFormSubmitted : boolean = false;
  showResendOTP : boolean = false ;
  isResetPaswordFormSubmitted : boolean = false ;
  timerId: any;
  constructor(private ngZone: NgZone,private util : UtilFunctions) { }

  ngOnInit() {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', Validators.compose([Validators.required, FormValidators.email])),
    });
    this.OTPForm = new FormGroup({
      otp : new FormControl('',Validators.compose([Validators.required , Validators.minLength(4),Validators.maxLength(4)]))
    });
    this.resetPasswordForm = new FormGroup({
      password : new FormControl('',Validators.compose([Validators.required,FormValidators.password])),
      confirmPassword : new FormControl('',Validators.compose([Validators.required , FormValidators.password ]))
    })
  }

  onForgotEmailFed()
  {
    if(this.forgotPasswordForm.valid) {
      this.isShowForgotPassword = false;
      this.isShowOTP = true ;
      this.startTimer();
    }
  }

  onSubmitOTP()
  {
    if(this.OTPForm.valid)
    {
      this.isShowOTP = false ;
      this.isShowResetPassword = true ; 
    }
  }

  startTimer() {
    let remainingTime = 30;
    this.OTPForm.controls['otp'].setValue('');
    this.showResendOTP = false ;
    this.timerId = setInterval(() => {
      this.ngZone.run(() => {
        remainingTime--;
        if (remainingTime === 0) {
          clearInterval(this.timerId);
          this.showResendOTP = true ;
        }
      });
    }, 1000);
  }

  onSubmitResetForm()
  {
    this.isResetPaswordFormSubmitted =true;
    let formValues = this.resetPasswordForm.getRawValue();
    if( this.resetPasswordForm.valid && formValues.password == formValues.confirmPassword)
    {
      this.util.navigate(APP_PATH.LOGIN)
    }
  }

}
