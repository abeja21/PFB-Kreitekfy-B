import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongDetailsService } from './service/song-details.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {

  username!: string
  title!: string
  singer!: string
  duration!: string
  upload_date!: Date 
  style!: string
  Album!: string
  img!: string
  Rating!: number[]

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
        console.log(data)
        this.title = data.title
        this.singer = data.singer
        this.duration = data.duration
        this.upload_date = data.upload_date
        this.style = data.style
        this.Album = data.Album
        this.img = data.img
        this.Rating = data.Rating
      },
      error: (err) => {console.log(err);}
    })
  }
  
  public getRating(){
    
  }

}
