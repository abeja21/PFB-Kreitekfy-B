import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsSongsComponent } from 'src/app/entities/news-songs/news-songs.component';
import { NewSongsService } from 'src/app/entities/news-songs/service/new-songs.service';
import { BestRatedService } from 'src/app/entities/songs-best-rated/services/best-rated.service';
import { MostFamousService } from 'src/app/entities/songs-most-famous/service/most-famous.service';
import { Song } from '../backoffice/model/song.model';
import { BackofficeService } from '../backoffice/service/backoffice.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  name!: string
  size: number = 5;

  songList: Song[] = []
  songIdToDelete!: number
  styleFilter!: string;

  songListNew: Song[] = []
  songListrated: Song[] = []
  songListFamous: Song[] = []
  
  newSongComponent?: NewsSongsComponent

  constructor(private route: ActivatedRoute,
              private router: Router,
              private backoffice: BackofficeService,
              private newsongservice: NewSongsService,
              private ratedsongservice: BestRatedService,
              private mostfamousservice: MostFamousService) { }

  ngOnInit(): void {
    const entryParam: string = this.route.snapshot.paramMap.get("name")!
    this.name = entryParam
    this.getSongs()

  }



  logOut(){
    localStorage.removeItem('user')
    this.router.navigate([""])
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


  public searchByFilters():void {
    this.getSongs()
  }

  
  getSongs(): any{

    const filters: string | undefined = this.buildFilters();

    this.newsongservice.getnewSongs(filters).subscribe({
      next: (data: any) => {
        console.log(data.content)
        this.songListNew = data.content
      }
    })

    this.ratedsongservice.getratedSongs(filters).subscribe({
      next: (data: any) => {
        console.log(data.content)
        this.songListrated = data.content
      }
    })

    this.mostfamousservice.getfamousSongs(filters).subscribe({
      next: (data: any) => {
        console.log(data.content)
        this.songListFamous = data.content
      }
    })
  }


}
