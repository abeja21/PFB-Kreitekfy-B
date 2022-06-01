import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/layouts/backoffice/model/song.model';
import { BestRatedService } from './services/best-rated.service';

@Component({
  selector: 'app-songs-best-rated',
  templateUrl: './songs-best-rated.component.html',
  styleUrls: ['./songs-best-rated.component.scss']
})
export class SongsBestRatedComponent implements OnInit {
  @Input() song?: Song;
  @Output() click: EventEmitter<number> = new EventEmitter<number>();
  songList: Song[] = [];
  
  constructor(private bestRatedService: BestRatedService) { }

  ngOnInit(): void {
    this.getnewSongs();
  }

  getnewSongs() {
    this.bestRatedService.getratedSongs().subscribe({
      next: (data: any) => {
        this.songList = data.content;
      },
    });
  }

}
