import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccueilModule } from 'src/app/accueil/acceuil.module'
import { AppComponent } from './app.component';
import { ProfilModule } from './profil/profil.module';
import {AppRoutingModule} from './app-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from "@angular/common/http";
import {UserModule} from './authentification/user.module';
import { TennisPartService } from './Shared/TennisPart.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './guard/auth.interceptor';

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
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [TennisPartService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi:true
    }
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
