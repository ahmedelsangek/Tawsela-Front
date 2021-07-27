import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public isVisible: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  
  readMore(){
    const toggleText = document.querySelector(".more-text");
    toggleText?.classList.toggle('show-more')
    this.isVisible = !this.isVisible;
  }
}
