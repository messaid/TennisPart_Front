import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TennisPartService } from '../Shared/TennisPart.service';
import { NgForm } from '@angular/forms';
import { Classement } from '../Models/Classement';
import { PartiePropose } from '../Models/PartiePropose';

@Component({
  selector: 'app-poster-demand',
  templateUrl: './poster-demand.component.html',
  styles: []
})
export class PosterDemandComponent implements OnInit {
  list : Classement[];
  formData : PartiePropose
  constructor(private router:Router, private service:TennisPartService) { }

  ngOnInit() {

    this.formData = 
    {
        Id: "",
        ClassementsIdMax:"",
        ClassementsIdMin:"",
        Participation:"",
        JoueurId:"",
        HeurePartie:null,
        LocalisationMatch:""
    };
    this.initialiser();
  }



  initialiser(){

    this.service.getUserProfile().subscribe
    (
      (res:any)=>{this.formData=res;console.log(res)},
      err=>{console.log(err)},
    )

    this.service.GetClassementList()
    .toPromise()
    .then(res => this.list = res as Classement[]);
    console.log(this.list)
  }

  onLogout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }

  onSubmit(form:NgForm)
  {

  }
}
