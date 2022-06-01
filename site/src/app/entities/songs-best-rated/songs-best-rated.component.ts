import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/layouts/backoffice/model/song.model';
import { BestRatedService } from './services/best-rated.service';

@Component({
  selector: 'app-songs-best-rated',
  templateUrl: './songs-best-rated.component.html',
  styleUrls: ['./songs-best-rated.component.scss']
})
export class SongsBestRatedComponent implements OnInit {
  songList: Song[] = [];
  
  constructor(private bestRatedService: BestRatedService) { }

  ngOnInit(): void {
    this.getnewSongs();
  }

  getnewSongs() {
    this.bestRatedService.getnewSongs().subscribe({
      next: (data: any) => {
        this.songList = data.content;
      },
    });
  }

}
