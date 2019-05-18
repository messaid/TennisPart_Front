import { Injectable } from '@angular/core';
import {Joueur} from '../Models/Joueur'
import{ HttpClient} from '@angular/common/http'
import { Classement } from '../Models/Classement';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TennisPartService {

  formModel : FormGroup
  readonly rootUrl ='http://localhost:60978/api';
  constructor(private fb:FormBuilder,private http:HttpClient) {
       
    this.formModel = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.email],
      FullName: [''],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
      }, { validator: this.comparePasswords })
  
    });

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


   postProfilDetail(formData:Joueur)
   {
     console.log(formData)
     return this.http.post(this.rootUrl+"/UserProfil/UpdateProfil",formData);
   }


   register()
  {
    var body ={
      UserName : this.formModel.value.UserName,
      Email : this.formModel.value.Email,
      FullName : this.formModel.value.FullName,
      Password : this.formModel.value.Passwords.Password
    };
    return this.http.post(this.rootUrl+"/ApplicationUser/Register",body);
  }

  login(formData)
  {
    return this.http.post(this.rootUrl+"/ApplicationUser/Login",formData);
  }

  getUserProfile()
  {
    return this.http.get(this.rootUrl+"/UserProfil/GetProfil");
  }


  GetClassementList(){
    return this.http.get(this.rootUrl + '/Classements');
  }
}
