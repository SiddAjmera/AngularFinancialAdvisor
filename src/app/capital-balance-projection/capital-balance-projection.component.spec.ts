import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalBalanceProjectionComponent } from './capital-balance-projection.component';

describe('CapitalBalanceProjectionComponent', () => {
  let component: CapitalBalanceProjectionComponent;
  let fixture: ComponentFixture<CapitalBalanceProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapitalBalanceProjectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CapitalBalanceProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
