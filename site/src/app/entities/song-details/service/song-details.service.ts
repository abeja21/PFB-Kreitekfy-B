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

    let baseUrl = "http://localhost:8080/PFB/songs/" + id
    
    console.log(baseUrl)
    return this.http.get<SongDetails>(baseUrl)

    
  }

  public updateSong(song: SongDetails):Observable<SongDetails>{

    let baseUrl = "http://localhost:8080/PFB/songs/"
    
    console.log(baseUrl,song)
    return this.http.patch<SongDetails>(baseUrl, song)
  }
}
