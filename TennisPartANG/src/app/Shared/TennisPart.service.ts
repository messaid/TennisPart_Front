import { Injectable } from '@angular/core';
import {Joueur} from '../Models/Joueur'
import{ HttpClient} from '@angular/common/http'
import { Classement } from '../Models/Classement';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TennisPartService {
  formData : Joueur;
  formModel : FormGroup
  readonly rootUrl ='http://localhost:60978/api';
  list : Classement[];
  constructor(private fb:FormBuilder,private http:HttpClient) {
    this.formData = 
    {
        IdJoueur: 0,
        Prenom: "",
        Nom: "",
        NumeroTel: "",
        Email: "",
        Photo:"",
        IdClassement:"",
        Age:""
    };
    console.log(this.formData);
    console.log('hahowa');
    
    this.formModel = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.email],
      FullName: [''],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
      }, { validator: this.comparePasswords })
  
    });

    console.log(this.formModel);

   }


   comparePasswords(fb:FormGroup){
    let confirmpass = fb.get('ConfirmPassword');
      if(confirmpass.errors==null || 'passwordMismatch' in confirmpass.errors)
      {
        if(fb.get('Password').value!=confirmpass.value)
        {
          confirmpass.setErrors({passwordMismatch:true});
        }else
        {
          confirmpass.setErrors(null);
        }
      }
    }

//    postDeleteDetails(id)
//    {
//     return this.http.delete(this.rootUrl+"/PaymentDeatils/"+id);
//    }

   postProfilDetail(formData:Joueur)
   {
     return this.http.post(this.rootUrl+"/Joueurs",formData);
   }


//    putPaymentDetail(formData:PaymentDetail)
//    {
//      return this.http.put(this.rootUrl+"/PaymentDeatils/"+formData.PmId,formData);
//    }

  GetClassementList(){
    this.http.get(this.rootUrl + '/Classements')
    .toPromise()
    .then(res => this.list = res as Classement[]);
  }
}
