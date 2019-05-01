import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfilComponent } from './profil/profil.component';
import { ErrorPageComponent } from './error-page/error-page.component';

// routes
const appRoutes: Routes = [
	{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
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