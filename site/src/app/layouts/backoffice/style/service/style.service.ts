import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Style } from '../model/style.model';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor(private http: HttpClient) { }

  public getAllStyles(partialName?: string): Observable<Style[]> {
    
    let baseUrl = "http://localhost:8080/PFB/styles"
    if (partialName) {
     baseUrl = baseUrl + "?partialName=" + partialName;
    } 
    return this.http.get<Style[]>(baseUrl);
  }
}
