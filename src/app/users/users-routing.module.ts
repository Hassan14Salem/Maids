import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { DetailsOfUserComponent } from './Components/details-of-user/details-of-user.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AllUsersComponent},
  {path:'detailsOfUser/:id',component:DetailsOfUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
