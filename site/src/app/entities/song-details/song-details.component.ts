import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongDetailsService } from './service/song-details.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {

  name!: string

  constructor(private songdetailsService: SongDetailsService,
  private router: Router) { }

  ngOnInit(): void {
    this.getName()

    this.name = localStorage.getItem('user')!

  }

}
