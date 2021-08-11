import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PrimengModule } from 'src/app/primeng.module';
import { RouterModule } from '@angular/router';
import { GenerationPipe } from './pipe/generation.pipe';
import { GamesService } from './service/games.service';


@NgModule({
  imports: [CommonModule, PrimengModule, RouterModule],
  declarations: [
    LoadingComponent,
    NotFoundComponent,
    GenerationPipe,
  ],
  providers: [GamesService],
  exports: [
    CommonModule,
    PrimengModule,
    GenerationPipe,
    LoadingComponent,
    NotFoundComponent,
  ],
})
export class SharedModule {}
