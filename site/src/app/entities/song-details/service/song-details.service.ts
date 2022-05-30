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
    
    return this.http.get<SongDetails>(baseUrl)
  }

  public getRating(id:string, rating:number):Observable<any>{

    let baseUrl = "http://localhost:8080/PFB/song"

    return this.http.put(baseUrl + "/" + id, {rating});
  }
}
