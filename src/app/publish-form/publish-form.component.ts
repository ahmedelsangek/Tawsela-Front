import { Component, OnInit } from '@angular/core';
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
  public city = ["Asyut", "Luxor" , "Aswan" , "Sohag"];
  constructor() {}
  trip = new Trip();

  ngOnInit(): void {}
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
}
