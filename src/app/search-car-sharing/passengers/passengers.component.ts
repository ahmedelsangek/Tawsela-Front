import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
 num:any=2;
 firstTime=true;
  constructor() { }

  ngOnInit(): void {
    this.num=2;
    document.getElementById("miusBtn")?.classList.add("text-muted")
    this.num= document.getElementById("number")?.innerText;
    console.log(this.num)
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
    this.firstTime=false;
     if (this.num<=3) {
      document.getElementById("miusBtn")?.classList.remove("text-muted")
      document.getElementById("miusBtn")?.classList.add("baseColor")
      this.num++
      console.log(this.num)
     }else{
      document.getElementById("plusBtn")?.classList.remove("baseColor")
      document.getElementById("plusBtn")?.classList.add("text-muted")
     }
    
   
  }
}
