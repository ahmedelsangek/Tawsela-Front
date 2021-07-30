import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Trip } from './trip';
import {catchError} from 'rxjs/operators';
import { iTrip } from './iTrip';

@Injectable({
  providedIn: 'root'
})
export class PublishServiceService {
  baseUrl:string="http://localhost:12268/api/Trips";
  constructor(private http: HttpClient) { }



  addTrip(newTrip:Trip):Observable<Trip>{
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(newTrip);
    console.log(body)

    return this.http.post(this.baseUrl,body,{'headers':headers})
  }
  getTrips():Observable<iTrip[]>
  {
    return this.http.get<iTrip[]>(this.baseUrl);
  }
}
