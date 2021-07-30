import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared classes and interfaces/car';
import { CarService } from 'src/app/shared classes and interfaces/car.service';
import { User } from 'src/app/shared classes and interfaces/user';
import { UserServiceService } from 'src/app/shared classes and interfaces/user-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  email=true;
  name=false;
  date=false;
  carId=false;
  gender=false;
  password=false;

  constructor(private userService: UserServiceService, private _CarService: CarService) { }
  appUser= new User();
  newCar = new Car();
 
  ngOnInit(): void {
    //  this.newCar.CarNumber=0;
    //  this.newCar.AvaialbleSeats=0;
    //  this.newCar.CarImagePath=""
    //  this._CarService.addCar(this.newCar).subscribe(data => console.log(data));
  }
  submit(){
    this.userService.addUser(this.appUser).subscribe(data =>console.log(data));
  }
  noCar(){
    this._CarService.addCar(this.newCar).subscribe(data =>console.log(data));
    this.appUser.carId="1";
    this.next();
  }
  
  haveCar(){
    this.appUser.carId=this.newCar.CarNumber
    this._CarService.addCar(this.newCar).subscribe(data =>console.log(data));
    this.appUser.carId="1";
    this.next();
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
      this. carId=true;
    }else if (this.carId == true) {
      this.carId=false;
      this. gender=true;
    }else if(this.gender==true){
      this. gender=false;
      this. password=true;
  }else if(this.password==true){
    this. password=false;
}
  }
}
