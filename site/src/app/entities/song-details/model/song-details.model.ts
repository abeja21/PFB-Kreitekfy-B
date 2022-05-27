export class SongDetails{
    name: string;
    singer: string;
    duration: string;
    upload_date: Date;
    plays: number;
    style: string;
    Album: string[];
    img: string;


  constructor(
    name: string, 
    singer: string,
    duration: string, 
    upload_date: Date, 
    plays: number, 
    style: string,
    Album: string[],
    img: string
) {
    this.name = name
    this.singer = singer
    this.duration = duration
    this.upload_date = upload_date
    this.plays = plays
    this.style = style
    this.Album = Album
    this.img = img
  }

}