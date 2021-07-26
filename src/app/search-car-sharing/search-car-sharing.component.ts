import { Component, OnInit } from '@angular/core';
import { Trip } from '../shared classes and interfaces/trip';
@Component({
  selector: 'app-search-car-sharing',
  templateUrl: './search-car-sharing.component.html',
  styleUrls: ['./search-car-sharing.component.scss']
})
export class SearchCarSharingComponent implements OnInit {
searchTrip= new Trip();
  constructor() { }

  ngOnInit(): void {
  }

}
