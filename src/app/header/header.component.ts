import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuToggle() {
    const toggleMenu = document.querySelector(".menu");
    toggleMenu?.classList.toggle('active')
    console.log("menuToggle clicked")
  }

}
