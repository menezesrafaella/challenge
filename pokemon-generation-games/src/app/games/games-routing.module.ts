import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationDetailComponent } from './generation-detail/generation-detail.component';
import { GenerationListComponent } from './generation-list/generation-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'generation-list',
    component: GenerationListComponent,
  },
  {
    path: 'detail/:id',
    component: GenerationDetailComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
