import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import {
  AgeAndYear,
  ProjectionElement,
} from './../../../model/table-data.model';
import { ChartData } from './../../../model/chart-data.model';
import { UserInputs } from '../../../model/user-inputs.model';

@Injectable({
  providedIn: 'root',
})
export class CapitalBalanceProjectionService {
  private _userInputs = {
    initialCapital: 300000,
    salary: 100000,
    currentAge: 45,
    contributionRate: 9.5,
    inflationRate: 3,
    earningsRate: 7.5,
    fees: 1.5,
    tax: 15,
    withdrawalRate: 5,
    ageWithdrawalsStartAndContributionsEnd: 65,
  };
  private userInputs = new BehaviorSubject<UserInputs>(this._userInputs);
  userInputs$ = this.userInputs.asObservable();

  private chartData = new BehaviorSubject<ChartData>({
    data: [],
    labels: [],
  });
  chartData$ = this.chartData.asObservable();

  private tableData = new BehaviorSubject<Array<ProjectionElement>>([]);
  tableData$ = this.tableData.asObservable();

  constructor() {
    this.updateProjection(this._userInputs);
  }

  updateProjection(updatedUserInputs: UserInputs) {
    this._userInputs = updatedUserInputs;
    this.userInputs.next(updatedUserInputs);

    const agesAndYears = this.generateAgesAndYears();
    const updatedTableData = this.updateTableData(agesAndYears);
    this.tableData.next(updatedTableData);

    this.chartData.next(this.updateChartData(updatedTableData));
  }

  private updateChartData(
    updatedTableData: Array<ProjectionElement>
  ): ChartData {
    const updatedChartData = <ChartData>{
      data: [],
      labels: [],
    };
    updatedTableData.forEach((tableDataItem: ProjectionElement) => {
      updatedChartData.data.push(tableDataItem.startBalance);
      updatedChartData.labels.push(tableDataItem.year);
    });
    return updatedChartData;
  }

  private updateTableData(
    agesAndYears: Array<AgeAndYear>
  ): Array<ProjectionElement> {
    let previousYearsProjectionItem: ProjectionElement;
    return agesAndYears.map(({ age, year }, index) => {
      const projectionItem = <ProjectionElement>{
        year,
        age,
        startBalance: previousYearsProjectionItem
          ? previousYearsProjectionItem.endBalance
          : this._userInputs.initialCapital,
        contributions: previousYearsProjectionItem
          ? /* this.getContributionAmount(
            previousYearsProjectionItem.contributions,
            this._userInputs.inflationRate,
            age,
            this._userInputs.ageWithdrawalsStartAndContributionsEnd
          ) */ this.getContributionAmountWithCompoundedInflationRate(
              index + 1,
              age,
              this._userInputs.ageWithdrawalsStartAndContributionsEnd
            )
          : this.getPercentageAmount(
              this._userInputs.salary,
              this._userInputs.contributionRate
            ),
      };

      const startBalancePlusContributions =
        projectionItem.startBalance + projectionItem.contributions;
      projectionItem.earnings = this.getPercentageAmount(
        startBalancePlusContributions,
        this._userInputs.earningsRate
      );

      const startBalancePlusContributionsPlusEarnings =
        projectionItem.startBalance +
        projectionItem.contributions +
        projectionItem.earnings;
      projectionItem.fees = this.getPercentageAmount(
        startBalancePlusContributionsPlusEarnings,
        this._userInputs.fees
      );

      const accTax = projectionItem.contributions + projectionItem.earnings;
      projectionItem.tax = this.getPercentageAmount(
        accTax,
        this._userInputs.tax
      );

      projectionItem.withdrawals =
        age <= this._userInputs.ageWithdrawalsStartAndContributionsEnd
          ? 0
          : this.getPercentageAmount(
              projectionItem.startBalance,
              this._userInputs.withdrawalRate
            );

      projectionItem.endBalance =
        projectionItem.startBalance +
        projectionItem.contributions +
        projectionItem.earnings -
        projectionItem.fees -
        projectionItem.tax -
        projectionItem.withdrawals;

      previousYearsProjectionItem = <ProjectionElement>{ ...projectionItem };
      return projectionItem;
    });
  }

  private generateAgesAndYears(): Array<AgeAndYear> {
    const currentYear = new Date().getFullYear();
    // Max Age Assumed - 120 Years
    return Array(120 - this._userInputs.currentAge + 1)
      .fill(0)
      .map((_, index) => this._userInputs.currentAge + index)
      .map((age, index) => ({ age, year: currentYear + index }));
  }

  private getPercentageAmount(totalAmount: number, percentage: number): number {
    return totalAmount * (percentage / 100);
  }

  /* Gets the Contribution Amount with Simple Inflation Rate */
  private getContributionAmount(
    contributionAmount: number,
    inflationRate: number,
    age: number,
    ageWithdrawalsStartAndContributionsEnd: number
  ): number {
    return ageWithdrawalsStartAndContributionsEnd < age
      ? 0
      : contributionAmount * (1 + inflationRate / 100);
  }

  /* Gets the Contribution Amount with Compounded Inflation Rate */
  private getContributionAmountWithCompoundedInflationRate(
    index: number,
    age: number,
    ageWithdrawalsStartAndContributionsEnd: number
  ): number {
    return ageWithdrawalsStartAndContributionsEnd < age
      ? 0
      : this._userInputs.salary *
          (this._userInputs.contributionRate / 100) *
          (1 + this._userInputs.inflationRate / 100) ** (index - 1);
  }
}
