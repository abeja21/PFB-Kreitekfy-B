import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SongDetails } from '../model/song-details.model';

@Injectable({
  providedIn: 'root'
})

export class SongDetailsService {

  constructor (private http:HttpClient){}

  public getSongDetails(id:string):Observable<SongDetails>{

    let baseUrl = "http://localhost:3000/song/" + id
    
    console.log(baseUrl)
    return this.http.get<SongDetails>(baseUrl)
  }
}
