import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackofficeService } from './service/backoffice.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {

  size: number = 25;
  sort: string = "name,asc";


  styleFilter?: string;
  singerFilter?: number;
  albumFilter?: string;
  titleFilter?:string;

  itemIdToDelete?: number;

  constructor(private route: ActivatedRoute,
              private backOfficeService: BackofficeService) { }

  ngOnInit(): void {

    this.buildFilters()
  }

  private buildFilters() {
    const filters: string[] = [];


    if(this.styleFilter) {
      filters.push("style:MATCH:" + this.styleFilter);
    }
    if(this.singerFilter) {
      filters.push("singer:MATCH:" + this.singerFilter);
    }
    if(this.albumFilter) {
      filters.push("album:MATCH:" + this.albumFilter);
    }
    if(this.titleFilter) {
      filters.push("title:MATCH:" + this.titleFilter);
    }


    if (filters.length >0) {

      let globalFilters: string = "";
      for (let filter of filters) {
        globalFilters = globalFilters + filter + ",";
      }
      globalFilters = globalFilters.substring(0, globalFilters.length-1);
      console.log(globalFilters)
      return globalFilters;
     

    } else {
      return undefined;
    }
  }


  getSongs(){

    const filters: string | undefined = this.buildFilters();

    this.backOfficeService.getSongs(filters).subscribe({
      next: (data) => {

      }
    })
  }

}
