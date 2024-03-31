import { Pipe, PipeTransform } from '@angular/core';
import { UsersData } from '../interfaces/users-data';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: UsersData[], value:string): UsersData[] {

    return users.filter(user=> user.id.toString().includes(value));
  }

}
