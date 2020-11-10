import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flatDirectors'
})
export class FlatDirectorsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
