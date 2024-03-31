import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-of-user',
  templateUrl: './details-of-user.component.html',
  styleUrls: ['./details-of-user.component.css']
})
export class DetailsOfUserComponent implements OnInit{
userInfo:any;
id:any;
isLoading:boolean=false;
  constructor(private _UsersService:UsersService,private _ActivatedRoute:ActivatedRoute){}
  getUserById()
  {
    this.isLoading=true;
    this._UsersService.getUserByIdMain(this.id).subscribe({
      next:(Response)=>{
        this.userInfo = Response.data
        this.isLoading=false;
        console.log(this.userInfo)
      }
    })
  }


  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.paramMap.get('id');
    this.getUserById()
  }
}
