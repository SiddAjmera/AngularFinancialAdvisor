import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { CapitalBalanceProjectionChartComponent } from './capital-balance-projection-chart.component';

describe('CapitalBalanceProjectionChartComponent', () => {
  let component: CapitalBalanceProjectionChartComponent;
  let fixture: ComponentFixture<CapitalBalanceProjectionChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalBalanceProjectionChartComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalBalanceProjectionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
