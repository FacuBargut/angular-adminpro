import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos
import { AuthRoutingModule } from './auth-routing.module';

// Componentes
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent, RegisterComponent
  ]
})
export class AuthModule { }
