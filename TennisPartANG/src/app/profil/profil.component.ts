import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TennisPartService } from '../Shared/TennisPart.service';
import {Router} from'@angular/router'
import { Joueur } from '../Models/Joueur';
import { Classement } from '../Models/Classement';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styles: []
})
export class ProfilComponent implements OnInit {
  list : Classement[];
  formData : Joueur
  PhotoChanged : boolean = false
  fileToUpload : File = null;
  ImageUrl : string = "./assets/Img/20.png"
  constructor(private service: TennisPartService,private router:Router) { }


  ngOnInit() {
    this.formData = 
    {
        Id: "",
        FullName: "",
        PhoneNumber: "",
        Email: "",
        Photo:"",
        ClassementsId:"",
        Age:"",
        UserName:""
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

  // onFileUpload(file : FileList){
  //   this.fileToUpload = file.item(0);
  //   var reader = new FileReader();
  //   reader.onload = (event:any) => {
  //   this.formData.Photo = event.target.result;
  //   };
  //     reader.readAsDataURL(this.fileToUpload);
     
  //     this.PhotoChanged = true
  //     console.log(this.PhotoChanged)
  //   }


  onSubmit(form:NgForm)
  {
    console.log(form.value)
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
