import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numstr'
})
export class NumstrPipe implements PipeTransform {

  transform(value: number): string {
    if (value >= 1000000) {
      return (value /1000000).toFixed(1) + 'M'
    }
    if(value >= 100000){
      return (value/100000).toFixed(1) + 'K'
    }
    else{
      return value.toString();
    }
  }

}
