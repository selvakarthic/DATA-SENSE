import { NgModule } from '@angular/core';
import { LoginPageRoutingModule } from './login-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginPage } from './login.page';
import { FormErrorsComponentModule } from 'src/app/components/form-errors/form-errors.module';

@NgModule({
  imports: [
    SharedModule,
    LoginPageRoutingModule,
    FormErrorsComponentModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
