import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilComponent } from './profil/profil.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserComponent } from './authentification/user.component';

// routes
const appRoutes: Routes = [
	{ path: '', redirectTo: 'auth', pathMatch: 'full' },
	{ path: 'auth', component:UserComponent },
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