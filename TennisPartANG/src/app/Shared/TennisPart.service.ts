import { Injectable } from '@angular/core';
import {Joueur} from '../Models/Joueur'
import{ HttpClient} from '@angular/common/http'
import { Classement } from '../Models/Classement';

@Injectable({
  providedIn: 'root'
})
export class TennisPartService {
  formData : Joueur;
  readonly rootUrl ='http://localhost:60978/api';
  list : Classement[];
  constructor(private http:HttpClient) {
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
