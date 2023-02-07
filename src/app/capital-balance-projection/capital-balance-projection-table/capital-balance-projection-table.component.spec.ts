import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalBalanceProjectionTableComponent } from './capital-balance-projection-table.component';

describe('CapitalBalanceProjectionTableComponent', () => {
  let component: CapitalBalanceProjectionTableComponent;
  let fixture: ComponentFixture<CapitalBalanceProjectionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalBalanceProjectionTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalBalanceProjectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
