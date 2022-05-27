import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User.model';

const baseUrl = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor(private http: HttpClient) { }


  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(baseUrl + "users");
  }
}
