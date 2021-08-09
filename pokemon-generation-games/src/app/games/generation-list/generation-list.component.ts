import { Component, OnInit } from '@angular/core';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-generation-list',
  templateUrl: './generation-list.component.html',
  styleUrls: ['./generation-list.component.scss']
})
export class GenerationListComponent implements OnInit {

  games: any[];

  cols: any[];

  display: boolean = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {

  this.generationGames();
  
  this.cols = [
      { field: 'name', header: 'Nome' },
      { field: 'url', header: 'Ver detalhes' },
  ];
  }

  generationGames(): any{
    return this.gamesService.getGameGenerationList().subscribe((generation) => {
      console.log(generation);
      this.games = generation.results;
    });
  }

  getDetailedGeneration(row): any{
    this.display = true;
    console.log(row);
  }

}
