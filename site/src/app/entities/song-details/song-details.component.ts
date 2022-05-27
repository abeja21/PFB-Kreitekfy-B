import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {

  name!: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.name = localStorage.getItem('user')!

  }

}
