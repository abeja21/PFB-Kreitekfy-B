import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongDetailsComponent } from './entities/song-details/song-details.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { BackofficeComponent } from './layouts/backoffice/backoffice.component';
import { PlayerComponent } from './layouts/player/player.component';

const routes: Routes = [
  {path: '', component: AuthenticationComponent},
  {path: 'player/:name', component: PlayerComponent},
  {path: 'admin', component: BackofficeComponent},
  {path: 'song/:id', component: SongDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
