// Vendors
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from "@angular/router";
// Components
import { AuthenticationComponent } from "./authentication/authentication.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { LoginComponent } from "./login/login.component";
// Modules
import { MaterialModule } from "../shared/modules/material.module";
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { FormModule } from "../shared/modules/form.module";

@NgModule({
  declarations: [
    AuthenticationComponent,
    CreateUserComponent,
    LoginComponent
  ],
  imports: [
    RouterOutlet,
    CommonModule,
    AuthenticationRoutingModule,
    MaterialModule,
    FormModule
  ]
})
export class AuthenticationModule { }
