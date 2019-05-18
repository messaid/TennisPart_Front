import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router'
import { TennisPartService } from '../Shared/TennisPart.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: []
})
export class AccueilComponent implements OnInit {

  constructor(private router:Router, private service:TennisPartService) {

   }

  ngOnInit() {
   
  }

  onClickHistory()
  {
  }

  onClickTroc()
  {

  }
  onClickReply()
  {

  }

  onClickFind()
  {

  }

  onClickProfil()
  {
    let link = ['/profil']
    this.router.navigate(link);
  }

onLogout()
{
  localStorage.removeItem('token');
  this.router.navigate(['/user/login'])
}

}
