import { Component, OnInit } from '@angular/core';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.sass']
})
export class GameListComponent implements OnInit {

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.generationGames();
  }

  generationGames(){
    return this.gamesService.getGameGenerationList().subscribe((generation) => {
      console.log(generation)
    })
  }

}
