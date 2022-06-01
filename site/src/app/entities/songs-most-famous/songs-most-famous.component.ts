import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/layouts/backoffice/model/song.model';
import { MostFamousService } from './service/most-famous.service';

@Component({
  selector: 'app-songs-most-famous',
  templateUrl: './songs-most-famous.component.html',
  styleUrls: ['./songs-most-famous.component.scss']
})
export class SongsMostFamousComponent implements OnInit {
  @Input() song?: Song;
  @Output() click: EventEmitter<number> = new EventEmitter<number>();
  songList: Song[] = [];
  constructor(private famousService: MostFamousService) { }

  ngOnInit(): void {
    this.getFamousSongs()
  }

  getFamousSongs() {
    this.famousService.getfamousSongs().subscribe({
      next: (data: any) => {
        this.songList = data.content;
      },
    });
  }

}
