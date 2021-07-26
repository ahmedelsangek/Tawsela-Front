import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  getCities()
  {
    return [
      {"id":1,"name":"Asyut","tax":5},
      {"id":2,"name":"Alex","tax":8},
      {"id":3,"name":"Sohag","tax":9},
      {"id":4,"name":"Luxor","tax":7},
      {"id":5,"name":"Qena","tax":11},
      {"id":6,"name":"Cairo","tax":4}

    ]
  }
}
