// Vendors
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { AuthenticationComponent } from "./authentication/authentication.component";
import { LoginComponent } from "./login/login.component";
import { CreateUserComponent } from "./create-user/create-user.component";

const routes: Routes = [
  {
    path: '' ,
    component: AuthenticationComponent,
    children: [
      {
        path: 'login', component: LoginComponent,
      },
      {
        path: 'create-account', component: CreateUserComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
