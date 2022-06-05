import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { PreloadAllModules } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '*', redirectTo: 'login', pathMatch: 'full' },
  { path: 'list', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  //   {
  //     path: 'dashboard',
  //     // loadChildren: () =>import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)
  //   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
