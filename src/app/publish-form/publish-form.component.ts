import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CitiesService } from '../shared classes and interfaces/cities.service';
import { Trip } from '../shared classes and interfaces/trip';
import { HttpClient } from '@angular/common/http';



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
  data=""

  constructor(private _cityService: CitiesService, private http: HttpClient) { }

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
     this.data = "RecommPrice=" + this.selectedTax + "&Time=" + this.trip.Time + "&Notice=" + this.trip.Notice + "&Destination=" + this.trip.Distination.name
     + "&AvilablePassengers=" + this.trip.AvilablePassengers + "&Date=" + this.trip.Date + "&Departure=" + this.trip.Departure.name;
     console.log(this.data);
     this.http.post("http://localhost:12268/api/trips", this.data).subscribe((res) => {});
     


  }
}
