import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'freeornot'
})
export class FreeornotPipe implements PipeTransform {

  transform(value: any): any {
    if(value <= 0){
      return 'Free';
    }
    else{
      return value;
    }
  }

}
