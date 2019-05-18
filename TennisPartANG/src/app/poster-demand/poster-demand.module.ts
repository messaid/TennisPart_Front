import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PosterDemandComponent } from './poster-demand.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    PosterDemandComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
})
export class PosterDemandModule { }
