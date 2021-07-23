import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }
aboutYou:any;
account:any;
  ngOnInit(): void {
    document.getElementById("firstShown")?.click();
  }
 
  showAbout(){
    this.aboutYou=true;
    this.account=false;
  }
  showAccount(){
    this.account=true;
    this.aboutYou=false;
  }

}
