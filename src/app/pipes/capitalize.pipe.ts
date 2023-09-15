import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
   standalone:true
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    const val = value.split(' ')

    for(let i = 0; i < val.length; i++){

      const pic = val[i];

      const title =pic.charAt(0).toUpperCase();

      val[i] = title + val[i].substr(1).toLowerCase();
    }
    return val.join(' ');
  }

}
