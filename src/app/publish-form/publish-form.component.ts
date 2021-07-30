import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CitiesService } from '../shared classes and interfaces/cities.service';
import { Trip } from '../shared classes and interfaces/trip';
import { HttpClient } from '@angular/common/http';
import { PublishServiceService } from 'src/app/shared classes and interfaces/publish-service.service';



@Component({
  selector: 'app-publish-form',
  templateUrl: './publish-form.component.html',
  styleUrls: ['./publish-form.component.scss'],
})
export class PublishFormComponent implements OnInit {

  departure = true;
  distination = false;
  date = false;
  time = false;
  avilablePassengers = false;
  recommPrice = false;
  notice = false;
  summary = false;
  selectedTax = 0;
  cities = [] as any;
  trip = new Trip();
  editAmout = false;

  constructor(private _cityService: CitiesService, private http: HttpClient , private _publishService:PublishServiceService) { }

  ngOnInit(): void {
    this.cities = this._cityService.getCities();
  }
  next() {
    if (this.departure == true) {
      this.departure = false;
      this.distination = true;
    } else if (this.distination == true) {
      this.distination = false;
      this.date = true;
    } else if (this.date == true) {
      this.date = false;
      this.time = true;
    } else if (this.time == true) {
      this.time = false;
      this.avilablePassengers = true;
    } else if (this.avilablePassengers == true) {
      this.avilablePassengers = false;
      this.recommPrice = true;
    } else if (this.editAmout == true || this.recommPrice == true) {
      this.editAmout = false;
      this.recommPrice = false;
      this.notice = true;
    } else if (this.notice == true) {
      this.notice = false;
      this.summary = true;
    }
    else if (this.summary == true) {
      this.summary = false;
      this.departure = true;
    }
  }
  selectedCity(ev: Event, selectedValue: any) {
    this.selectedTax = selectedValue.tax * 6.5;
  }
  clickEdit() {
    this.recommPrice = false;
    this.editAmout = true
  }
  onSubmit() {
    this.trip.Distination=this.trip.Distination.name;
    this.trip.Departure = this.trip.Departure.name;
    this.trip.CaptainId="fbf78e88-9478-4b40-a350-1a8585308d87";
    this.trip.RecommPrice=this.selectedTax;
    console.log("collected data");
    this._publishService.addTrip(this.trip).subscribe(data =>console.log(data));
    console.log("data sent");
  }
}
