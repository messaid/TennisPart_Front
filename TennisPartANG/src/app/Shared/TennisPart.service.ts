import { Injectable } from '@angular/core';
import {Joueur} from '../Models/Joueur'
import{ HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TennisPartService {
  formData : Joueur
  readonly rootUrl ='http://localhost:55717/api';

  CO : string;
  constructor(private http:HttpClient) {
    this.formData = 
    {
        IdJoueur: 0,
        Prenom: "",
        Nom: "",
        NumeroTel: "",
        Email: "",
        Photo:"",
        Classement:"",
        Age:16
    };

   }



//    postDeleteDetails(id)
//    {
//     return this.http.delete(this.rootUrl+"/PaymentDeatils/"+id);
//    }

//    postPaymentDetail(formData:PaymentDetail)
//    {
//      return this.http.post(this.rootUrl+"/PaymentDeatils",formData);
//    }


//    putPaymentDetail(formData:PaymentDetail)
//    {
//      return this.http.put(this.rootUrl+"/PaymentDeatils/"+formData.PmId,formData);
//    }

//   refreshList(){
//     this.http.get(this.rootUrl + '/PaymentDeatils')
//     .toPromise()
//     .then(res => this.list = res as PaymentDetail[]);
//   }
}
