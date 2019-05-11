import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TennisPartService } from '../Shared/TennisPart.service';
import {Router} from'@angular/router'
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styles: []
})
export class ProfilComponent implements OnInit {

  constructor(private service: TennisPartService,private router:Router) { }
  ok : number
  ngOnInit() {
    this.service.GetClassementList();
  }

  onSubmit(form:NgForm)
  {
    this.service.postProfilDetail(form.value).subscribe(
      res=>{ this.router.navigate(['/accueil']);  },
      err=>{console.log(err);}
    )
  }

  onLogout()
{
  localStorage.removeItem('token');
  this.router.navigate(['/user/login'])
}

}
