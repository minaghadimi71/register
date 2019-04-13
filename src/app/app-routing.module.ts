import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {UserComponent} from './register/user/user.component';
import {AddUserComponent} from './register/add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path: 'users', component: RegisterComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'add', component: AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
