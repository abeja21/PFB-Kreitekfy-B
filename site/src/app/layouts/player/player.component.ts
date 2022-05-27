import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  name!: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const entryParam: string = this.route.snapshot.paramMap.get("name")!

    this.name = entryParam
  }

}
