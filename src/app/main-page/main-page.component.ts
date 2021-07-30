import { Component, OnInit } from '@angular/core';
import { Trip } from '../shared classes and interfaces/trip';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public isVisible: boolean = true;
  searchTrip=new Trip()
  constructor() { }

  ngOnInit(): void {
  }
  
  readMore(){
    const toggleText = document.querySelector(".more-text");
    toggleText?.classList.toggle('show-more')
    this.isVisible = !this.isVisible;
  }
}
