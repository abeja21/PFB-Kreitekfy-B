import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
