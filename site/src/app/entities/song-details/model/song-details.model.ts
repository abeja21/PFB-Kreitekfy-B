export class SongDetails{
    title: string;
    singer: string;
    duration: string;
    upload_date: Date;
    plays: number;
    style: string;
    Album: string;
    img: string;
    Rating: number[];


  constructor(
    title: string, 
    singer: string,
    duration: string, 
    upload_date: Date, 
    plays: number, 
    style: string,
    Album: string,
    img: string,
    Rating: number[]
) {
    this.title = title
    this.singer = singer
    this.duration = duration
    this.upload_date = upload_date
    this.plays = plays
    this.style = style
    this.Album = Album
    this.img = img
    this.Rating = Rating
  }

}