import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './game-list/game-list.component';
import { GameComponent } from './game/game.component';
import { GamesComponent } from './games.component';

const routes: Routes = [
  {
    path: '',
    component: GamesComponent,
    children: [
      {
        path: '',
        redirectTo: '/game-list',
        pathMatch: 'full',
      },
      {
        path: 'game-list',
        component: GameListComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
