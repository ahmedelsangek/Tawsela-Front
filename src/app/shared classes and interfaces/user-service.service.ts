import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl:string="http://localhost:12268/api/Authenticate/";

  constructor(private http: HttpClient) { }

  addUser(newUser:User):Observable<User>{
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(newUser);
    console.log(body)
    return this.http.post(this.baseUrl+"register",body,{'headers':headers})

  }
  Login(loginUser:User):Observable<User>{

    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(loginUser);
    console.log(body)
    return this.http.post(this.baseUrl+"Login",body,{'headers':headers})
  }
  
 

  
}
