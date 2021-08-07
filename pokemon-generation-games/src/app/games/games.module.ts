import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GameListComponent } from './game-list/game-list.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesService } from './shared/games.service';

@NgModule({
  declarations: [
    GameListComponent,
    GameComponent
  ],
  imports: [
    CommonModule, GamesRoutingModule
  ],
  providers:[GamesService]

})
export class GamesModule { }
