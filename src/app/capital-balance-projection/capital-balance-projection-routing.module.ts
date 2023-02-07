import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitalBalanceProjectionComponent } from './capital-balance-projection.component';

const routes: Routes = [
  {
    path: '',
    component: CapitalBalanceProjectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CapitalBalanceProjectionRoutingModule {}
