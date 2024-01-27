import { NgModule } from '@angular/core';
import { UserAddPageRoutingModule } from './user-add-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserAddPage } from './user-add.page';
import { FormErrorsComponentModule } from 'src/app/components/form-errors/form-errors.module';

@NgModule({
  imports: [
    SharedModule,
    UserAddPageRoutingModule,
    FormErrorsComponentModule
  ],
  declarations: [UserAddPage]
})
export class UserAddPageModule {}
