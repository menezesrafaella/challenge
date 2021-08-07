import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GameListComponent } from './game-list/game-list.component';
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';



@NgModule({
  declarations: [
    GameListComponent,
    GameComponent,
    GamesComponent
  ],
  imports: [
    CommonModule, GamesRoutingModule
  ]
})
export class GamesModule { }
