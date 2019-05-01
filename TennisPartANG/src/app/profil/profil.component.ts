import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TennisPartService } from '../Shared/TennisPart.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styles: []
})
export class ProfilComponent implements OnInit {

  constructor(private service: TennisPartService) { }

  ngOnInit() {
  }

}
