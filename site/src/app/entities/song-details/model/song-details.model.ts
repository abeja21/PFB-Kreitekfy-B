export class SongDetails{
    name: string;
    artistName: string;
    duration: string;
    dateLaunch: Date;
    plays: number;
    styleName: string;
    albumName: string;
    image: string;
    Rating: number[];



  constructor(
    name: string, 
    artistName: string, 
    duration: string, 
    dateLaunch: Date, 
    plays: number, 
    styleName: string, 
    albumName: string, 
    image: string, 
    Rating: number[]
) {
    this.name = name
    this.artistName = artistName
    this.duration = duration
    this.dateLaunch = dateLaunch
    this.plays = plays
    this.styleName = styleName
    this.albumName = albumName
    this.image = image
    this.Rating = Rating
  }


}