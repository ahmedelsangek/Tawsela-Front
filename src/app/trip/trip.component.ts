import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublishServiceService } from 'src/app/shared classes and interfaces/publish-service.service';
import { iTrip } from '../shared classes and interfaces/iTrip';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

   trips:iTrip[]=[];
names:string[]=["yehya","saad","Ayman"];

  constructor(private _publishService:PublishServiceService ,private http: HttpClient) { }

  ngOnInit(): void {
    this._publishService.getTrips().subscribe(
      data=>
      {
        this.trips = data;

        console.log(this.trips);

      }
      
    )
  }

}
