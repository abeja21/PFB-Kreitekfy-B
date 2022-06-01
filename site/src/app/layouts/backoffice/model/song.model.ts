export class Song{

    id: number
    name: string;
    duration: string;
    dateLaunch: Date;
    plays: number;
    image?: string;
    rating: [];
    styleId?: number
    styleName?: string;
    artistId?: number
    artistName?: string;
    albumId?: number
    albumName?: string;



  constructor(
    id: number, 
    name: string, 
    duration: string, 
    dateLaunch: Date, 
    plays: number, 
    rating: [],
    image?: string,
    styleId?: number, 
    styleName?: string, 
    artistId?: number, 
    artistName?: string, 
    albumId?: number, 
    albumName?: string
    
) {
    this.id = id
    this.name = name
    this.duration = duration
    this.dateLaunch = dateLaunch
    this.plays = plays
    this.image = image
    this.rating = rating
    this.styleId = styleId
    this.styleName = styleName
    this.artistId = artistId
    this.artistName = artistName
    this.albumId = albumId
    this.albumName = albumName
  }


}