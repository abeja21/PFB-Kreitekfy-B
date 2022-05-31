import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongDetailsComponent } from './entities/song-details/song-details.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { BackofficeComponent } from './layouts/backoffice/backoffice.component';
import { SongFormComponent } from './layouts/backoffice/songs/song-form/song-form.component';
import { PlayerComponent } from './layouts/player/player.component';

const routes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'player/:name', component: PlayerComponent},
  {path: 'admin', component: BackofficeComponent},
  {path: 'song/:id', component: SongDetailsComponent},
  {path: 'admin/songEdit/:id', component: SongFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
