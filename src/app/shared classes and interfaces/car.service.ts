import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl:string="http://localhost:12268/api/Cars";
  constructor(private http: HttpClient) { }



  addCar(newCar:Car):Observable<Car>{
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(newCar);
    console.log(body)
    return this.http.post(this.baseUrl,body,{'headers':headers})

  }
}
