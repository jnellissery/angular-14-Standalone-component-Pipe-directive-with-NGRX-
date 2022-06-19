import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpipe',
  standalone: true,
  pure: true,
})
export class UserPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }
}
