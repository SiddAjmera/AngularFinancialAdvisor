import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rounded'
})
export class RoundedPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }

}
