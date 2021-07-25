import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared classes and interfaces/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  email=true;
  name=false;
  date=false;
  gender=false;
  password=false;

  constructor() { }
  appUser= new User();
  ngOnInit(): void {
  }
  next(){
    if (this.email==true) {
      this.email=false;
      this.name=true;
    }else if(this.name==true){
      this.name=false;
      this.date=true;
    }else if(this.date==true){
      this.date=false;
      this. gender=true;
    }else if(this.gender==true){
      this. gender=false;
      this. password=true;
  }else if(this.password==true){
    this. password=false;
}
  }
}
