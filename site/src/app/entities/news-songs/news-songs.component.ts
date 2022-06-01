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

  constructor(private newSongService: NewSongsService) {}

  ngOnInit(): void {
    this.getnewSongs();
    
  }

  public getnewSongs() {
    this.newSongService.getnewSongs().subscribe({
      next: (data: any) => {
        this.songList = data.content;
        console.log(this.songList);
      },
    });
  }
}
