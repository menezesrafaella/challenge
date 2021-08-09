import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerationListComponent } from './generation-list/generation-list.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesService } from './shared/games.service';
import { PrimengModule } from '../primeng.module';

@NgModule({
  declarations: [
    GenerationListComponent,
  ],
  imports: [
    CommonModule, GamesRoutingModule, PrimengModule
  ],
  providers: [
    GamesService
  ]
})
export class GamesModule { }
