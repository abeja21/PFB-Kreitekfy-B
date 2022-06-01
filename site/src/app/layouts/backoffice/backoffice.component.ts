import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from './model/song.model';
import { BackofficeService } from './service/backoffice.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  username!: string
  size: number = 25;
  sort: string = "name,asc";

  songList: Song[] = []
  songIdToDelete!: number
  styleFilter?: string;
  singerFilter?: number;
  albumFilter?: string;
  titleFilter?:string;

  itemIdToDelete?: number;

  constructor(private route: ActivatedRoute,
              private backOfficeService: BackofficeService) { }

  ngOnInit(): void {
    this.getSongs()
    this.username = localStorage.getItem('user')!
  }

  public searchByFilters():void {
    this.getSongs();
  }

  private buildFilters(): string | undefined {
    const filters: string[] = [];


    if(this.styleFilter) {
      filters.push("style.name:EQUAL:" + this.styleFilter);
    }
    if(this.singerFilter) {
      filters.push("artist.name:EQUAL:" + this.singerFilter);
    }
    if(this.albumFilter) {
      filters.push("album.name:EQUAL:" + this.albumFilter);
    }
    if(this.titleFilter) {
      filters.push("name:MATCH:" + this.titleFilter);
    }


    if (filters.length >0) {

      let globalFilters: string = "";
      for (let filter of filters) {
        globalFilters = globalFilters + filter + ",";
      }
      globalFilters = globalFilters.substring(0, globalFilters.length-1);
      console.log(globalFilters)
      return globalFilters;
    } else {
      return undefined;
    }
  }


  getSongs(){

    const filters: string | undefined = this.buildFilters();

    this.backOfficeService.getSongs(this.size, filters).subscribe({
      next: (data: any) => {

        this.songList = data.content

        
        console.log(this.songList)
        
      }
    })


  }

  public prepareSongToDelete(songId: number): void {
    this.songIdToDelete = songId;
  }

  public deleteSong(): void {
    if (this.songIdToDelete) {
      this.backOfficeService.deleteSong(this.songIdToDelete).subscribe({
        next: (data) => {
          this.getSongs();
        },
        error: (err) => {console.log(err)}
      })
    }
  }

}
