import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'capital-balance-projection',
    loadChildren: () =>
      import(
        './capital-balance-projection/capital-balance-projection.module'
      ).then(
        ({ CapitalBalanceProjectionModule }) => CapitalBalanceProjectionModule
      ),
  },
  {
    path: '**',
    redirectTo: '/capital-balance-projection',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
