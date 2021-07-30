import { Component, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { PublishServiceService } from 'src/app/shared classes and interfaces/publish-service.service';
import { SearchCarSharingComponent } from '../search-car-sharing/search-car-sharing.component';
import { iTrip } from '../shared classes and interfaces/iTrip';
import { User } from '../shared classes and interfaces/user';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  trips:iTrip[]=[];
  driverID:string="abb311d5-9d7c-46f8-805a-56c171af07f1"

  constructor(private _publishService:PublishServiceService ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
    this._publishService.getTrips().subscribe(
      (data) => {
        console.log(data)
        this.trips=data})
        
  }

 
   

}

  


