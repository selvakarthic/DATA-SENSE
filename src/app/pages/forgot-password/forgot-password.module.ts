import { NgModule } from '@angular/core';
import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';
import { FormErrorsComponentModule } from 'src/app/components/form-errors/form-errors.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPasswordPage } from './forgot-password.page';

@NgModule({
  imports: [
    SharedModule,
    FormErrorsComponentModule,
    ForgotPasswordPageRoutingModule
  ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
