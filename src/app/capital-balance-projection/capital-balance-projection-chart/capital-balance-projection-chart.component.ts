import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { ChartData } from './../../model/chart-data.model';

@Component({
  selector: 'app-capital-balance-projection-chart',
  templateUrl: './capital-balance-projection-chart.component.html',
  styleUrls: ['./capital-balance-projection-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapitalBalanceProjectionChartComponent implements OnChanges {
  @Input() chartData!: ChartData;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Capital Balance Projection',
        fill: 'origin',
        // backgroundColor: 'rgba(148,159,177,0.2)',
        // borderColor: 'rgba(148,159,177,1)',
        // pointBackgroundColor: 'rgba(148,159,177,1)',
        // pointBorderColor: '#fff',
        // pointHoverBackgroundColor: '#fff',
        // pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      },
    ],
    labels: [],
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            // let label = context.dataset.label || '';
            let label = 'Start Balance';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += this.transformAsCurrency(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          // Include a dollar sign in the ticks
          callback: (value, index, ticks) => this.transformAsCurrency(+value),
        },
      },
    },
  };

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnChanges(): void {
    this.lineChartData.datasets[0].data = this.chartData.data;
    this.lineChartData.labels = this.chartData.labels;
    this.chart?.update();
  }

  private transformAsCurrency(value: number) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'AUD',
    }).format(value);
  }
}
