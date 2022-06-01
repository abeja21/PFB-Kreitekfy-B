import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../model/song.model';


@Injectable({
  providedIn: 'root'
})
export class BackofficeService {

  constructor(private http: HttpClient) { }


  public getSongs(size:number, filters?: string): Observable<Song[]>{
    let baseUrl = "http://localhost:8080/PFB/songs?size=" + size;
    if(filters) {
      baseUrl  =  baseUrl + "&filter=" + filters
    }
    console.log(baseUrl)
    return this.http.get<Song[]>(baseUrl);
  }

  public deleteSong(id: number): Observable<any>{
    let baseUrl = "http://localhost:8080/PFB/songs/" + id
    return this.http.delete<any>(baseUrl)
  }
}
