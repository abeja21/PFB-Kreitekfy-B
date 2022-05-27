export class Song{
    name: string;
    duration: string;
    upload_date: Date;
    plays: number;
    Album: string[];


  constructor(
    name: string, 
    duration: string, 
    upload_date: Date, 
    plays: number, 
    Album: string[]
) {
    this.name = name
    this.duration = duration
    this.upload_date = upload_date
    this.plays = plays
    this.Album = Album
  }

}