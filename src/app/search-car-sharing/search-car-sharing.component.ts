import { Component, OnInit,ViewChild } from '@angular/core';
import { Trip } from '../shared classes and interfaces/trip';
import { DateComponent } from './date/date.component';

@Component({
  selector: 'app-search-car-sharing',
  templateUrl: './search-car-sharing.component.html',
  styleUrls: ['./search-car-sharing.component.scss']
})
export class SearchCarSharingComponent implements OnInit {
searchTrip= new Trip();
 date:any;
 num:any;
 Today=true
  constructor() { }

  ngOnInit(): void {
   
    document.getElementById("miusBtn")?.classList.add("text-muted")
    this.num= document.getElementById("number")?.innerText;
  }
  ngAfterViewInit(): void {

    this.num=1;
    
    
  }
  bindData(date:string){
    this.Today=false
    this.date=date
    console.log(this.date);
  }
  
  minus(){
    if(this.num>=2){
      document.getElementById("plusBtn")?.classList.remove("text-muted")
      document.getElementById("plusBtn")?.classList.add("baseColor")
      this.num--;
    }else{
      document.getElementById("miusBtn")?.classList.remove("baseColor")
      document.getElementById("miusBtn")?.classList.add("text-muted")

    }

  }
  plus(){
     if (this.num<=3) {
      document.getElementById("miusBtn")?.classList.remove("text-muted")
      document.getElementById("miusBtn")?.classList.add("baseColor")
      this.num++
     }else{
      document.getElementById("plusBtn")?.classList.remove("baseColor")
      document.getElementById("plusBtn")?.classList.add("text-muted")
     }
    
     
  }
}



