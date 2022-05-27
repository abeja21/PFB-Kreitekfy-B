export class Song{
    name: string;
    duration: string;
    upload_date: Date;
    style: string;
    plays: number;
    singer: string;
    Album: string[];


  constructor(
    name: string, 
    duration: string, 
    upload_date: Date, 
    style: string, 
    plays: number, 
    singer: string, 
    Album: string[]
) {
    this.name = name
    this.duration = duration
    this.upload_date = upload_date
    this.style = style
    this.plays = plays
    this.singer = singer
    this.Album = Album
  }


}