export class Song{

    id: number
    name: string;
    duration: string;
    dateLaunch: Date;
    styleName: string;
    plays: number;
    artistName: string;
    albumName: string[];
    image: string



  constructor(
    id: number, 
    name: string, 
    duration: string, 
    dateLaunch: Date, 
    styleName: string, 
    plays: number, 
    artistName: string, 
    albumName: string[], 
    image: string
) {
    this.id = id
    this.name = name
    this.duration = duration
    this.dateLaunch = dateLaunch
    this.styleName = styleName
    this.plays = plays
    this.artistName = artistName
    this.albumName = albumName
    this.image = image
  }





}