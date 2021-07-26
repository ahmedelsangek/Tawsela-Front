import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
 num:any=1;
  constructor() { }

  ngOnInit(): void {
    
    document.getElementById("miusBtn")?.classList.add("text-muted")
    this.num= document.getElementById("number")?.innerText;
    this.num=1;
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
