import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-generation-detail',
  templateUrl: './generation-detail.component.html',
  styleUrls: ['./generation-detail.component.scss']
})
export class GenerationDetailComponent implements OnInit {

  id: number;

  games: any;

  constructor(  
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) { }

  ngOnInit(): void {
    const generation = this.route.snapshot.paramMap.get('id');

    switch (generation) {
      case 'generation-i':
        this.id = 1;
        break;
      case 'generation-ii':
        this.id = 2;
        break;
      case 'generation-iii':
        this.id = 3;
        break;
      case 'generation-iv':
        this.id = 4;
        break;
      case 'generation-v':
        this.id = 5;
        break;
      case 'generation-vi':
        this.id = 6;
        break;
      case 'generation-vii':
        this.id = 7;
        break;
      case 'generation-viii':
        this.id = 8;
        break;
      default:
        alert(`Não existem informações sobre a ${generation}.`);
    }

    this.getDetailedGeneration(this.id);

  }

  getDetailedGeneration(id): any{
    return this.gamesService.getGameGenerationById(id).subscribe((generation) => {
      this.games = generation;
    });
  }



}
