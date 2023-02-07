import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalBalanceProjectionFormComponent } from './capital-balance-projection-form.component';

describe('CapitalBalanceProjectionFormComponent', () => {
  let component: CapitalBalanceProjectionFormComponent;
  let fixture: ComponentFixture<CapitalBalanceProjectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalBalanceProjectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalBalanceProjectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
