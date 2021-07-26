import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../shared classes and interfaces/cities.service';
import { Trip } from '../shared classes and interfaces/trip';

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
  selectedTax = 0;
  cities = [] as any;
  trip = new Trip();

  constructor(private _cityService: CitiesService) { }

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
    } else if (this.recommPrice == true) {
      this.recommPrice = false;
      this.notice = true;
    } else if (this.notice == true) {
      this.notice = false;
    }
  }
  selectedCity(ev: Event,  selectedValue:any) {
    this.selectedTax = selectedValue.tax;
  }
}