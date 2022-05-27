import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  name!: string

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const entryParam: string = this.route.snapshot.paramMap.get("name")!

    this.name = entryParam
  }



  logOut(){
    localStorage.removeItem('user')
    this.router.navigate([""])
  }

}
