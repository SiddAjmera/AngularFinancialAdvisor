import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CapitalBalanceProjectionChartComponent } from './capital-balance-projection-chart/capital-balance-projection-chart.component';
import { CapitalBalanceProjectionComponent } from './capital-balance-projection.component';
import { CapitalBalanceProjectionFormComponent } from './capital-balance-projection-form/capital-balance-projection-form.component';
import { CapitalBalanceProjectionRoutingModule } from './capital-balance-projection-routing.module';
import { CapitalBalanceProjectionTableComponent } from './capital-balance-projection-table/capital-balance-projection-table.component';
import { MaterialModule } from '../material.module';
import { RoundedPipe } from './pipes/rounded/rounded.pipe';

@NgModule({
  declarations: [
    CapitalBalanceProjectionChartComponent,
    CapitalBalanceProjectionComponent,
    CapitalBalanceProjectionFormComponent,
    CapitalBalanceProjectionTableComponent,
    RoundedPipe,
  ],
  imports: [
    CapitalBalanceProjectionRoutingModule,
    CommonModule,
    MaterialModule,
    NgChartsModule,
    ReactiveFormsModule,
  ],
})
export class CapitalBalanceProjectionModule {}
