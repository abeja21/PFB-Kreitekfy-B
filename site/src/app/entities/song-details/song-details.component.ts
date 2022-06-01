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

  constructor(private songdetailsService: SongDetailsService,
  private route: Router, private router:ActivatedRoute) { }

  counter = 0;



  ngOnInit(): void {

    this.username = localStorage.getItem('user')!
    this.getSongDetails()
  }

  increment() {
    this.counter++;
    console.log(this.counter)
    this.updateplays()
    
  }

  public getSongDetails(){
    const entryParam = this.router.snapshot.paramMap.get("id")!
    this.songdetailsService.getSongDetails(entryParam).subscribe({
      next:(data)=>{
        console.log(data)
        this.song = data
      },
      error: (err) => {console.log(err);}
    })
  }

  public updateplays(){
    const entryParam = this.router.snapshot.paramMap.get("id")!
    this.songdetailsService.addplays(entryParam, this.counter).subscribe({
      next:(data) =>{
        console.log(data)
      },
      error: (err) => {console.log(err);}
    })
  }

}
