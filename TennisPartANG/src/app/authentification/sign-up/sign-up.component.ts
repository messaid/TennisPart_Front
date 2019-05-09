import { Component, OnInit } from '@angular/core';
import { TennisPartService } from 'src/app/Shared/TennisPart.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor(private service: TennisPartService) { }

  ngOnInit() {
  }
  onSubmit()
  {
    
  }
}
