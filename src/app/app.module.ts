import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppointmentService } from './components/create-appointment/appointment.service';
import { DataStorageService } from './shared/data-storage.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { AppointmentListComponent } from './components/create-appointment/appointment-list/appointment-list.component';
import { AppointmentItemComponent } from './components/create-appointment/appointment-list/appointment-item/appointment-item.component';
import { MainListComponent } from './components/main-list/main-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    UserComponent,
    CreateAppointmentComponent,
    AppointmentListComponent,
    AppointmentItemComponent,
    MainListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AppointmentService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
