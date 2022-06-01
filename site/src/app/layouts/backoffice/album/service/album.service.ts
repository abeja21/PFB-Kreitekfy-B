import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../model/album.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  baseUrl = "http://localhost:8080/PFB/"

  constructor(private http: HttpClient) { }

  public getAllAlbums(partialName?: string): Observable<Album[]> {
    
    let urlEndpoint: string = this.baseUrl + "albums/";
    if (partialName) {
      urlEndpoint = urlEndpoint + "?partialName=" + partialName;
    } 
    return this.http.get<Album[]>(urlEndpoint);
  }
}
