import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminorUserComponent } from './adminor-user/adminor-user.component';



import { CenterListComponent } from './center-list/center-list.component';

import { CreateCenterComponent } from './create-center/create-center.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceslistComponent } from './serviceslist/serviceslist.component';
import { UpdateCenterComponent } from './update-center/update-center.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
   {path: 'adminoruser',component:AdminorUserComponent},
   {path: 'admin/login',component:AdminLoginComponent},
   {path: 'dashboard',component:DashboardComponent},
   {path:'centers',component:CenterListComponent},
   {path: '', redirectTo: 'centers', pathMatch: 'full'},
   {path: 'create-center', component: CreateCenterComponent},
   {path: 'create-service', component: CreateServiceComponent},
   {path: 'update-service/:id', component: UpdateServiceComponent},
   {path: 'delete-service', component: DeleteServiceComponent },
   {path: 'Home-page', component: HomepageComponent},
   {path: 'service-list', component: ServiceslistComponent},
   {path: 'users-list', component: UserListComponent},
   {path: 'update-center/:id',component: UpdateCenterComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
