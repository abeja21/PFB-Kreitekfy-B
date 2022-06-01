import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from 'src/app/layouts/backoffice/model/song.model';

@Injectable({
  providedIn: 'root'
})
export class MostFamousService {

  constructor(private http: HttpClient) { }

  public getfamousSongs(filters?: string): Observable<Song[]>{
    let baseUrl = "http://localhost:8080/PFB/songs?size=5&sort=plays,desc";
    if(filters) {
      baseUrl  =  baseUrl + "&filter=" + filters
    }
    return this.http.get<Song[]>(baseUrl);
  }
}
