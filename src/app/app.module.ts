import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CenterListComponent } from './center-list/center-list.component';
import { UpdateCenterComponent } from './update-center/update-center.component';
import { CreateCenterComponent } from './create-center/create-center.component';
import { FormsModule } from '@angular/forms';
import { DeleteCenterComponent } from './delete-center/delete-center.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ServiceslistComponent } from './serviceslist/serviceslist.component';
import { UserListComponent } from './user-list/user-list.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { DeleteServiceComponent } from './delete-service/delete-service.component';


@NgModule({
  declarations: [
    AppComponent,
    CenterListComponent,
    UpdateCenterComponent,
    CreateCenterComponent,
    DeleteCenterComponent,
    HomepageComponent,
    ServiceslistComponent,
    UserListComponent,
    CreateServiceComponent,
    UpdateServiceComponent,
    DeleteServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
