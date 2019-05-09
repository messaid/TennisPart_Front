import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignInComponent } from 'src/app/authentification/sign-in/sign-in.component'
import { SignUpComponent } from 'src/app/authentification/sign-up/sign-up.component'
import {FormsModule} from '@angular/forms'
import { UserComponent} from 'src/app/authentification/user.component' 
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class UserModule { }
