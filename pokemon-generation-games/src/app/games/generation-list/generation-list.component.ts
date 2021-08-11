import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../shared/helper/animation';
import { GamesService } from '../shared/service/games.service';

@Component({
  selector: 'app-generation-list',
  templateUrl: './generation-list.component.html',
  styleUrls: ['./generation-list.component.scss'],
  animations: [fadeInOut],
})
export class GenerationListComponent implements OnInit {

  generation: any[];

  games: any;

  cols: any[];

  public loading = false;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {

  this.generationGames();
  this.cols = [
      { field: 'name', header: 'Gerações' },
      { field: 'url', header: 'Ver detalhes' },
  ];
  }

  generationGames(): any{
    this.loading = true;

    return this.gamesService.getGameGenerationList().subscribe((list) => {
      this.generation = list.results;
      this.loading = false;
    }, err => {
      this.loading = false;
    });
  }

}
