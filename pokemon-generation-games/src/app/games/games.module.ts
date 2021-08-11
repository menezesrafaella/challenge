import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerationListComponent } from './generation-list/generation-list.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesService } from './shared/service/games.service';
import { GenerationDetailComponent } from './generation-detail/generation-detail.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    GenerationListComponent,
    GenerationDetailComponent,
  ],
  imports: [
    CommonModule, SharedModule, GamesRoutingModule
  ],
  providers: [
    GamesService
  ]
})
export class GamesModule { }
