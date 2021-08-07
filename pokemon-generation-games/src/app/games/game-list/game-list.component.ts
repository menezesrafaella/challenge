import { Component, OnInit } from '@angular/core';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.sass']
})
export class GameListComponent implements OnInit {

  games: any[];

  cols: any[];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.generationGames();

    this.cols = [
      { field: 'name', header: 'Nome' },
      { field: 'url', header: 'URL' },
  ];
  }

  generationGames(): any{
    return this.gamesService.getGameGenerationList().subscribe((generation) => {
      console.log(generation);
      this.games = generation.results;
    });
  }



}
