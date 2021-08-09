import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationListComponent } from './generation-list/generation-list.component';

const routes: Routes = [
  {
    path: 'generation-list',
    component: GenerationListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
