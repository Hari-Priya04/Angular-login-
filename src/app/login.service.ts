import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
deleteUrl="http://localhost:8000/deleteuserid"

  constructor(private http: HttpClient){}
     
  login(user:any){
    return this.http.post('http://localhost:8000/login',user)
  }
  signup(user:any){
    return this.http.post('http://localhost:8000/Signup',user)
  }
  addUser(user:any){
    return this.http.post('http://localhost:8000/Signup',user)
  }
  deleteUser(id:any){
    return this.http.delete(`${this.deleteUrl}/${id}`)
  }
  
}

