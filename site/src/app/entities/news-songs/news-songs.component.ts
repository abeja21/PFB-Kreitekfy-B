import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/layouts/backoffice/model/song.model';
import { NewSongsService } from './service/new-songs.service';

@Component({
  selector: 'app-news-songs',
  templateUrl: './news-songs.component.html',
  styleUrls: ['./news-songs.component.scss'],
})
export class NewsSongsComponent implements OnInit {
  songList: Song[] = [];
  styleFilter?: string;

  constructor(private newSongService: NewSongsService) {}

  ngOnInit(): void {
    this.getnewSongs()
  }

  getnewSongs(filters?: any) {
    this.songList = [];
    filters = this.buildFilters();
    this.newSongService.getnewSongs(filters).subscribe({
      next: (data: any) => {
        this.songList = data.content;
      },
    });
  }

  private buildFilters(): string | undefined {
    const filters: string[] = [];


    if(this.styleFilter) {
      filters.push("style.name:MATCH:" + this.styleFilter);
    }


    if (filters.length >0) {

      let globalFilters: string = "";
      for (let filter of filters) {
        globalFilters = globalFilters + filter + ",";
      }
      globalFilters = globalFilters.substring(0, globalFilters.length-1);

      return globalFilters;
    } else {
      return undefined;
    }
  }

  public getFilter(songfilter: any ) {
    this.songList = songfilter
  }
}
