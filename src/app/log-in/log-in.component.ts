import { Component, OnInit } from '@angular/core';
import { User } from '../shared classes and interfaces/user';
import { UserServiceService } from '../shared classes and interfaces/user-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
appUser= new User();
email=true;
password=false;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
  }

  next(){
    if (this.email==true) {
      this.email=false;
      this.password=true;
    }
  }
submit(){
this.userService.Login(this.appUser).subscribe(data => console.log(data))
}

}
