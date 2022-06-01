import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongDetails } from './model/song-details.model';
import { SongDetailsService } from './service/song-details.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {
  date: Date = new Date
  song!: SongDetails
  username!: string
  valoration: number[] = []
  avg: number = 2
  ratingUser!: number

  constructor(private songdetailsService: SongDetailsService,
  private route: Router, private router:ActivatedRoute) { }

  



  ngOnInit(): void {

    this.username = localStorage.getItem('user')!
    this.getSongDetails()
  }

  public getSongDetails(){
    const entryParam = this.router.snapshot.paramMap.get("id")!
    this.songdetailsService.getSongDetails(entryParam).subscribe({
      next:(data)=>{
        this.song = data
        this.valoration = data.rating
        this.rating()
      },
      error: (err) => {console.log(err);}
    })
  }

  public updateplays(){
    this.song.plays++
    const entryParam = this.router.snapshot.paramMap.get("id")!
    this.songdetailsService.addplays(entryParam, this.song).subscribe({
      next:(data) =>{
      },
      error: (err) => {console.log(err);}
    })
  }

    async rating(){
    let sum = 0
    for (let i = 0 ; i < this.valoration.length; i++){
          sum += this.valoration[i]
    }
    this.avg = sum / this.valoration.length || 0
    this.avg = Math.round(this.avg)
  }

  updateRating(){
    console.log(this.avg)
  }
}
