import { Component, OnInit } from '@angular/core';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-generation-list',
  templateUrl: './generation-list.component.html',
  styleUrls: ['./generation-list.component.scss']
})
export class GenerationListComponent implements OnInit {

  generation: any[];

  games: any;

  cols: any[];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {

  this.generationGames();
  this.cols = [
      { field: 'name', header: 'Nome' },
      { field: 'url', header: 'Ver detalhes' },
  ];
  }

  generationGames(): any{
    return this.gamesService.getGameGenerationList().subscribe((list) => {
      this.generation = list.results;
      console.log(list);
    });
  }

}
