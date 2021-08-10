import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInOut } from '../shared/helpers/animation';
import { GamesService } from '../shared/service/games.service';

@Component({
  selector: 'app-generation-detail',
  templateUrl: './generation-detail.component.html',
  styleUrls: ['./generation-detail.component.scss'],
  animations: [fadeInOut],
})
export class GenerationDetailComponent implements OnInit, AfterContentInit {
  id: number;

  games: any;

  species: [];

  types: [];

  versions: [];

  public loading = false;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private router: Router
  ) {}

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
        this.router.navigate(['/games/404']);
    }
  }

  ngAfterContentInit(): void {
    this.games = setTimeout(() => this.getDetailedGeneration(this.id), 100);
  }

  getDetailedGeneration(id): any {
    this.loading = true;

    return this.gamesService.getGameGenerationById(id).subscribe(
      (generation) => {
        this.games = generation;
        if (this.games.pokemon_species) {
          this.species = this.games.pokemon_species;
        }
        if (this.games.types) {
          this.types = this.games.types;
        }
        if (this.games.version_groups) {
          this.versions = this.games.version_groups;
        }
        this.loading = false;
      },
      (err) => {
        this.loading = false;
      }
    );
  }

  firstLetter(word): any {
    if (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  }
}
