import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/user-list/user-list.module').then(m => m.UserListPageModule)
  },
  {
    path: 'user-add',
    loadChildren: () => import('./pages/user-add/user-add.module').then( m => m.UserAddPageModule)
  },
  {
    path :'',
    pathMatch :'full',
    redirectTo : 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
