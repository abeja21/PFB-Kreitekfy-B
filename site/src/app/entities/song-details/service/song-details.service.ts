import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})

export class SongDetailsService {

  constructor(private http: HttpClient) { }

  public getName(){
    
  }
  public getDuration(){

  }
  public getUploadDate(){

  }
  public getSinger(){

  }
  public getStyle(){

  }
  public getAlbum(){

  }
}
