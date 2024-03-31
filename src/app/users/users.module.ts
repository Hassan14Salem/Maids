import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { DetailsOfUserComponent } from './Components/details-of-user/details-of-user.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AllUsersComponent,
    DetailsOfUserComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MatProgressSpinnerModule
  ]
})
export class UsersModule { }
