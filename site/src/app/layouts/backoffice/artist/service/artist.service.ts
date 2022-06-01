import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../model/artist.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http : HttpClient) { }

  baseUrl = "http://localhost:8080/PFB/"

  public getAllArtists(partialName?: string): Observable<Artist[]> {
    
    let urlEndpoint: string = this.baseUrl + "artists/";
    if (partialName) {
      urlEndpoint = urlEndpoint + "?partialName=" + partialName;
    } 
    return this.http.get<Artist[]>(urlEndpoint);
  }
}
