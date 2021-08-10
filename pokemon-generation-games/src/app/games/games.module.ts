import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerationListComponent } from './generation-list/generation-list.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesService } from './shared/service/games.service';
import { PrimengModule } from '../primeng.module';
import { GenerationDetailComponent } from './generation-detail/generation-detail.component';
import { GenerationPipe } from './shared/pipe/generation.pipe';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    GenerationListComponent,
    GenerationDetailComponent,
    GenerationPipe,
    LoadingComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule, GamesRoutingModule, PrimengModule

  ],
  providers: [
    GamesService
  ]
})
export class GamesModule { }
