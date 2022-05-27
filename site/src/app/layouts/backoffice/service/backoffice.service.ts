import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../model/song.model';


@Injectable({
  providedIn: 'root'
})
export class BackofficeService {

  constructor(private http: HttpClient) { }


  public getSongs(filters?: string): Observable<Song[]>{
    let baseUrl = "http://localhost:8080/songs";

    if(filters) {
      baseUrl += "&filters=" + filters
    }
    return this.http.get<Song[]>(baseUrl);
  }
}
