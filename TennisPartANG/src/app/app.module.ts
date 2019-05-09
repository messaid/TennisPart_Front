import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccueilModule } from 'src/app/accueil/acceuil.module'
import { AppComponent } from './app.component';
import { ProfilModule } from './profil/profil.module';
import {AppRoutingModule} from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule } from "@angular/common/http";
import {UserModule} from './authentification/user.module';
import { TennisPartService } from './Shared/TennisPart.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccueilModule,
    ProfilModule,
    UserModule,
    HttpClientModule
  ],
  providers: [TennisPartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
