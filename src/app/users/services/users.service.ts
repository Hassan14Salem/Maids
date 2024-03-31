import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersData } from '../interfaces/users-data';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient:HttpClient) { }

AllUsersMain(pageNum:number):   Observable<any>
{
return this._HttpClient.get(`https://reqres.in/api/users?page=${pageNum}`);
}


getUserByIdMain(id:number):Observable<any>
{
return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
}

}
