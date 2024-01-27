import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormErrorsComponent } from './form-errors.component';


@NgModule({
  declarations: [
    FormErrorsComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    FormErrorsComponent
  ]
})
export class FormErrorsComponentModule { }
