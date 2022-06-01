import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { RatingModule } from "primeng/rating";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackofficeComponent } from './layouts/backoffice/backoffice.component';
import { PlayerComponent } from './layouts/player/player.component';
import { SongListComponent } from './entities/song-list/song-list.component';
import { NewsSongsComponent } from './entities/news-songs/news-songs.component';
import { SongsMostFamousComponent } from './entities/songs-most-famous/songs-most-famous.component';
import { SongsBestRatedComponent } from './entities/songs-best-rated/songs-best-rated.component';
import { SongsForYouComponent } from './entities/songs-for-you/songs-for-you.component';
import { SongDetailsComponent } from './entities/song-details/song-details.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { SongFormComponent } from './layouts/backoffice/songs/song-form/song-form.component';
import { StyleComponent } from './layouts/backoffice/style/style/style.component';
import { ArtistComponent } from './layouts/backoffice/artist/artist/artist.component';
import { AlbumComponent } from './layouts/backoffice/album/album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    BackofficeComponent,
    PlayerComponent,
    SongListComponent,
    NewsSongsComponent,
    SongsMostFamousComponent,
    SongsBestRatedComponent,
    SongsForYouComponent,
    SongDetailsComponent,
    AuthenticationComponent,
    SongFormComponent,
    StyleComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AutoCompleteModule,
    ReactiveFormsModule,
    RatingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
