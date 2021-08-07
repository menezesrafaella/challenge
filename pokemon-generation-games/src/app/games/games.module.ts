import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GameListComponent } from './game-list/game-list.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesService } from './shared/games.service';
import { PrimengModule } from '../primeng.module';

@NgModule({
  declarations: [
    GameListComponent,
    GameComponent
  ],
  imports: [
    CommonModule, GamesRoutingModule, PrimengModule
  ],
  providers: [
    GamesService
  ]
})
export class GamesModule { }
