import { Component, OnInit } from '@angular/core';
import {Router} from'@angular/router'
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styles: []
})
export class AccueilComponent implements OnInit {

  constructor(private router:Router) { }

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
}
