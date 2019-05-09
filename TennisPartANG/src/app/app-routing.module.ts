import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilComponent } from './profil/profil.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserComponent } from './authentification/user.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';

// routes
const appRoutes: Routes = [
	{path:'',redirectTo:'/user/login',pathMatch:'full'},
    {path:'user',redirectTo:'/user/login',pathMatch:'full'},
    {path:'user',component:UserComponent,
    children:[
     {path:'registration',component:SignUpComponent}, ///user/registration
     {path:'login',component:SignInComponent} ///user/login
    ]},
    { path: 'accueil', component:AccueilComponent },
	{ path: 'profil', component:ProfilComponent },
	{ path: '**', component: ErrorPageComponent}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }