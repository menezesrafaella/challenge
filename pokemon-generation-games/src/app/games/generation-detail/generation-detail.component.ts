import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../shared/games.service';

@Component({
  selector: 'app-generation-detail',
  templateUrl: './generation-detail.component.html',
  styleUrls: ['./generation-detail.component.scss']
})
export class GenerationDetailComponent implements OnInit, AfterContentInit {

  id: number;

  games: any;

  species: [];

  types: [];

  versions: [];

  constructor(  
    private route: ActivatedRoute,
    private gamesService: GamesService,
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

  }

  ngAfterContentInit() {
    this.games = setTimeout(
      () => this.getDetailedGeneration(this.id),
      1000
    );
  }

  getDetailedGeneration(id): any{
    return this.gamesService.getGameGenerationById(id).subscribe((generation) => {
      this.games = generation;
      console.log(this.games)
      if (this.games.pokemon_species){
        this.species = this.games.pokemon_species;
      }
      if (this.games.types){
        this.types = this.games.types;
      }
      if (this.games.version_groups){
        this.versions = this.games.version_groups;
      }
    });
  }



}
