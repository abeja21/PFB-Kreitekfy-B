import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../model/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:8080/PFB/"

  public update(song: Song): Observable<Song> {
    let urlEndpoint: string = this.baseUrl + "songs";
    return this.http.patch<Song>(urlEndpoint, song);
  }

  public create(song: Song): Observable<Song> {
    let urlEndpoint: string = this.baseUrl + "songs";
    return this.http.post<Song>(urlEndpoint, song);
  }

  public getSongById(songId: number): Observable<Song> {
    let urlEndpoint: string = this.baseUrl + "songs/" + songId;
    return this.http.get<Song>(urlEndpoint);
  }
}
