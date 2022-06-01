import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Song } from '../../model/song.model';
import { SongService } from '../service/song.service';
import { Style } from '../../style/model/style.model';
import { Album } from '../../album/model/album.model';
import { Artist } from '../../artist/model/artist.model';
import { StyleService } from '../../style/service/style.service';
import { AlbumService } from '../../album/service/album.service';
import { ArtistService } from '../../artist/service/artist.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.scss'],
})
export class SongFormComponent implements OnInit {
  mode: 'NEW' | 'UPDATE' = 'NEW';
  songId?: number;
  song?: Song;
  songForm?: FormGroup;
  date = new Date
  styles: Style[] = [];
  albums: Album[] = [];
  artist: Artist[] = [];
  selectedStyle?: Style;
  selectedArtist?: Artist;
  selectedAlbum?: Album;

  itemForm?: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
    private styleService: StyleService,
    private albumService: AlbumService,
    private artistService: ArtistService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildForm();

    const entryParam: string = this.route.snapshot.paramMap.get('id') ?? 'new';
    if (entryParam !== 'new') {
      this.songId = +this.route.snapshot.paramMap.get('id')!;
      this.mode = 'UPDATE';
      this.getSongById(this.songId!);
    } else {
      this.mode = 'NEW';
      this.initializeSong();
    }
  }

  getStyles(event?: any): void {
    let styleSearch: string | undefined;
    if (event?.query) {
      styleSearch = event.query;
    }
    this.styleService.getAllStyles(styleSearch).subscribe({
      next: (styleFiltered: Style[]) => {
        this.styles = styleFiltered;
      },
      error: (err: any) => {
        this.handleError(err);
      },
    });
  }

  getAlbums(event?: any): void {
    let albumSearch: string | undefined;

    if (event?.query) {
      albumSearch = event.query;
    }
    this.albumService.getAllAlbums(albumSearch).subscribe({
      next: (data: any) => {
        console.log(data);
        this.albums = data;
      },
      error: (err: any) => {
        this.handleError(err);
      },
    });
  }

  getArtists(event?: any): void {
    let artistSearch: string | undefined;

    if (event?.query) {
      artistSearch = event.query;
    }
    this.artistService.getAllArtists(artistSearch).subscribe({
      next: (artistsFiltered) => {
        this.artist = artistsFiltered;
      },
      error: (err) => {
        this.handleError(err);
      },
    });
  }

  saveSong(): void {
    const SongToSave: Song = this.createFromForm();
    if (this.mode === 'NEW') {
      this.insertSong();
    }

    if (this.mode === 'UPDATE') {
      this.updateSong();
    }
  }

  styleSelected(): void {
    this.song!.styleId = this.selectedStyle!.id;
    this.song!.styleName = this.selectedStyle!.name;
  }

  styleUnselected(): void {
    this.song!.styleId = undefined;
    this.song!.styleName = undefined;
  }

  artistSelected(): void {
    this.song!.artistId = this.selectedArtist!.id;
    this.song!.artistName = this.selectedArtist!.name;
  }

  artistUnselected(): void {
    this.song!.artistId = undefined;
    this.song!.artistName = undefined;
  }

  albumSelected(): void {
    this.song!.albumId = this.selectedAlbum!.id;
    this.song!.albumName = this.selectedAlbum!.name;
  }

  albumUnselected(): void {
    this.song!.albumId = undefined;
    this.song!.albumName = undefined;
  }

  includeImageInItem(event: any): void {
    const inputFile = event.target as HTMLInputElement;
    const file: File | null = inputFile.files?.item(0) ?? null;

    this.readFileAsString(file!).then(
      (result) => {
        const imageType: string = this.getImageType(result);
        console.log(imageType);
        const imageBase64: string = this.getImageBase64(result);
        console.log(imageBase64);

        this.song!.image = imageBase64;
      },
      (error) => {
        console.log('No se pudo cargar la imagen');
      }
    );
  }

  private buildForm(): void {
    this.itemForm = this.fb.group({
      id: [{ value: undefined, disabled: true }],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100),
        ],
      ],
      description: ['', [Validators.maxLength(2000)]],
      price: [0, [Validators.required, Validators.min(0)]],
      category: [undefined, [Validators.required]],
    });
  }

  private updateSong(): void {
    this.songService.update(this.song!).subscribe({
      next: (songUpdated: any) => {
        console.log('Modificado correctamente');
        console.log(songUpdated);
      },
      error: (err: any) => {
        this.handleError(err);
      },
    });
  }

  private createFromForm(): Song {
    return {
      ...this.song,
      id: this.songForm?.get(['id'])!.value,
      name: this.songForm?.get(['name'])!.value,
      duration: this.songForm?.get(['duration'])!.value,
      dateLaunch: this.songForm?.get(['dateLaunch'])!.value,
      rating: this.songForm?.get(['rating'])!.value,
      plays: this.songForm?.get(['plays'])!.value,
      albumId: this.songForm?.get(['album'])!.value.id,
      albumName: this.songForm?.get(['album'])!.value.name,
      artistId: this.songForm?.get(['artist'])!.value.id,
      artistName: this.songForm?.get(['artist'])!.value.name,
      styleId: this.songForm?.get(['style'])!.value.id,
      styleName: this.songForm?.get(['style'])!.value.name,
      image: this.song!.image,
    };
  }

  private updateForm(song: Song): void {
    this.songForm?.patchValue({
      id: song.id,
      name: song.name,
      duration: song.duration,
      dateLaunch: song.dateLaunch,
      valoration: song.rating,
      visualizations: song.plays,
      Album: new Album(song.albumId!, song.albumName!),
      Artist: new Artist(song.artistId!, song.artistName!),
      Style: new Style(song.styleId!, song.styleName!),
    });
  }

  private getImageType(imageString: string): string {
    const imageStringParts: string[] = imageString.split(',');
    if (imageStringParts.length == 2) {
      return imageStringParts[0];
    } else {
      return '';
    }
  }

  private getImageBase64(imageString: string): string {
    const imageStringParts: string[] = imageString.split(',');
    if (imageStringParts.length == 2) {
      return imageStringParts[1];
    } else {
      return '';
    }
  }

  private readFileAsString(file: File) {
    return new Promise<string>(function (resolve, reject) {
      let reader: FileReader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        resolve(this.result as string);
      };
    });
  }

  private insertSong(): void {
    console.log(this.song);
    this.songService.create(this.song!).subscribe({
      next: (songInserted: any) => {
        console.log('Insertado correctamente');
        console.log(songInserted);
      },
      error: (err: any) => {
        this.handleError(err);
      },
    });
  }

  private getSongById(songId: number): void {
    this.songService.getSongById(songId).subscribe({
      next: (songRequest: any) => {
        this.song = songRequest;
        this.updateForm(songRequest);
        this.selectedAlbum = new Album(
          songRequest.albumId!,
          songRequest.albumName!
        );
        this.selectedArtist = new Artist(
          songRequest.artistId!,
          songRequest.artistName!
        );
        this.selectedStyle = new Style(
          songRequest.styleId!,
          songRequest.styleName!
        );
      },
      error: (err: any) => {
        this.handleError(err);
      },
    });
  }

  private initializeSong(): void {
    this.song = new Song(0, '', '', new Date(), 0, '', 0);
  }

  private handleError(err: any): void {
    // ToDo
  }
}
