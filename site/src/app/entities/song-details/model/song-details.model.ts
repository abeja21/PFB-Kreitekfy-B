export class SongDetails{
    name: string;
    artistName: string;
    duration: string;
    dateLaunch: Date;
    plays: number;
    styleName: string;
    albumName: string;
    image: string;
    rating: number[];



  constructor(
    name: string, 
    artistName: string, 
    duration: string, 
    dateLaunch: Date, 
    plays: number, 
    styleName: string, 
    albumName: string, 
    image: string, 
    rating: number[]
) {
    this.name = name
    this.artistName = artistName
    this.duration = duration
    this.dateLaunch = dateLaunch
    this.plays = plays
    this.styleName = styleName
    this.albumName = albumName
    this.image = image
    this.rating = rating
  }


}