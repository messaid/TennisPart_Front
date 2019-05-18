import { Component, OnInit } from '@angular/core';
import { TennisPartService } from 'src/app/Shared/TennisPart.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styles: []
})
export class SignInComponent implements OnInit {
  formModelLogin = {
    UserName:'',
    Password:''
  }
  constructor(private service:TennisPartService, private router:Router, private toaster:ToastrService) { }

  ngOnInit() {
  }

  
  onSubmit(form : NgForm)
  {
      this.service.login(form.value).subscribe
      (
        (res:any)=>{
          localStorage.setItem('token',res.token);
          this.router.navigateByUrl('/accueil')},
        err=>{
          if(err.status==400)
          {
            this.toaster.error('mdp khasr','error');
          }
        }

      )
  }
}
