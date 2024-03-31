import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { UsersData } from '../../interfaces/users-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit{
constructor(private _UsersService:UsersService , private _ActivatedRoute:ActivatedRoute){}
searchValue:string=''
Users:UsersData[]=[]
isLoading:boolean=false;
totalPageNumbers:number[] = new Array(10)

AllUsers(pageNumber:number)
{
  this.isLoading=true;
  
  this._UsersService.AllUsersMain(pageNumber).subscribe({
    next:(Response) =>{
      this.Users=Response.data
      this.isLoading=false;

    }
  })
}



  ngOnInit(): void {
    this.AllUsers(1)


    localStorage.setItem('currentPage',"home")
  }
}
