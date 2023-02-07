import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CapitalBalanceProjectionService } from './services/capital-balance-projection/capital-balance-projection.service';
import { UserInputs } from './../model/user-inputs.model';

@Component({
  selector: 'app-capital-balance-projection',
  templateUrl: './capital-balance-projection.component.html',
  styleUrls: ['./capital-balance-projection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapitalBalanceProjectionComponent {
  userInputs$ = this.capitalBalanceProjectionService.userInputs$;
  chartData$ = this.capitalBalanceProjectionService.chartData$;
  tableData$ = this.capitalBalanceProjectionService.tableData$;
  
  constructor(
    private readonly capitalBalanceProjectionService: CapitalBalanceProjectionService
  ) {}

  handleUserInputsUpdate(updatedUserInputs: UserInputs): void {
    this.capitalBalanceProjectionService.updateProjection(updatedUserInputs);
  }
}
