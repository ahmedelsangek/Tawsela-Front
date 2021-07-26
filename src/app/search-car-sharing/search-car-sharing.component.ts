import { Component, OnInit,ViewChild } from '@angular/core';
import { Trip } from '../shared classes and interfaces/trip';
import { PassengersComponent } from './passengers/passengers.component';

@Component({
  selector: 'app-search-car-sharing',
  templateUrl: './search-car-sharing.component.html',
  styleUrls: ['./search-car-sharing.component.scss']
})
export class SearchCarSharingComponent implements OnInit {
searchTrip= new Trip();
 @ViewChild(PassengersComponent)passengers?: PassengersComponent;
 passenger:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    this.passenger=this.passengers?.num
  console.log(this.passengers?.num);
  }

}
