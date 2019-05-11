import { Component, OnInit } from '@angular/core';
import { TennisPartService } from 'src/app/Shared/TennisPart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor(private router :Router ,private service: TennisPartService) { }

  ngOnInit() {
  }
 
  onSubmit()
  {
    this.service.register().subscribe
    (
      (res:any)=>{
      if(res.Succeeded)
      {
        //faire un login
        
        var body ={
          UserName : this.service.formModel.value.UserName,
          Password : this.service.formModel.value.Passwords.Password
        };

        this.service.login(body).subscribe
        (
          (res:any)=>{
            localStorage.setItem('token',res.token);
            this.router.navigateByUrl('/accueil')},
          err=>{
            if(err.status==400)
            {
              console.log('mdp khasr','error')
            }
          }
  
        )

      }else
      {
      }}
      ,
      err=>{}
    )
  }
}
