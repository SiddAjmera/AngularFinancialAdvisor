import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ProjectionElement } from './../../model/table-data.model';

@Component({
  selector: 'app-capital-balance-projection-table',
  templateUrl: './capital-balance-projection-table.component.html',
  styleUrls: ['./capital-balance-projection-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapitalBalanceProjectionTableComponent {
  @Input() tableData!: ProjectionElement[];
  displayedColumns: string[] = [
    'year',
    'age',
    'startBalance',
    'contributions',
    'earnings',
    'fees',
    'tax',
    'withdrawals',
    'endBalance',
  ];
}
