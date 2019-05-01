import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfilComponent } from 'src/app/profil/profil.component'
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
})
export class ProfilModule { }
