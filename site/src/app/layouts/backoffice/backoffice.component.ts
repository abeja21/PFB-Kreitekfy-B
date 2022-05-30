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

  size: number = 25;
  sort: string = "name,asc";

  songList: Song[] = []
  styleFilter?: string;
  singerFilter?: number;
  albumFilter?: string;
  titleFilter?:string;

  itemIdToDelete?: number;

  constructor(private route: ActivatedRoute,
              private backOfficeService: BackofficeService) { }

  ngOnInit(): void {
    this.getSongs()
  }

  public searchByFilters():void {
    this.getSongs();
  }

  private buildFilters(): string | undefined {
    const filters: string[] = [];


    if(this.styleFilter) {
      filters.push("style.name:MATCH:" + this.styleFilter);
    }
    if(this.singerFilter) {
      filters.push("artist.name:MATCH:" + this.singerFilter);
    }
    if(this.albumFilter) {
      filters.push("album.name:MATCH:" + this.albumFilter);
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

}
