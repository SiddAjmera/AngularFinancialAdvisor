import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserInputs } from '../../model/user-inputs.model';

@Component({
  selector: 'app-capital-balance-projection-form',
  templateUrl: './capital-balance-projection-form.component.html',
  styleUrls: ['./capital-balance-projection-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CapitalBalanceProjectionFormComponent implements OnChanges {
  @Input() userInputs!: UserInputs;
  @Output() userInputsUpdate = new EventEmitter<UserInputs>();
  form = new FormGroup({
    initialCapital: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    salary: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    currentAge: new FormControl<number>(0, {
      validators: [
        Validators.required,
        // Min Age Assumed - 18 Years - Source: https://www.stockspot.com.au/investingforkids/
        Validators.min(18),
        // Max Age Assumed - 122 Years - Source: https://pubmed.ncbi.nlm.nih.gov/34869788/#:~:text=Abstract,natural%20limit%20around%20122%20years.
        Validators.max(122),
      ],
    }),
    contributionRate: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
    }),
    inflationRate: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
    }),
    earningsRate: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
    }),
    fees: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0)],
    }),
    tax: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0), Validators.max(45)],
    }),
    withdrawalRate: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0), Validators.max(100)],
    }),
    ageWithdrawalsStartAndContributionsEnd: new FormControl<number>(0, {
      validators: [Validators.required, Validators.min(0), Validators.max(120)],
    }),
  });

  getProjection(): void {
    this.userInputsUpdate.emit(this.form.value as UserInputs);
  }

  ngOnChanges(): void {
    this.form.patchValue(this.userInputs);
  }
}
