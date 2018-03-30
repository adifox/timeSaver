import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit, OnDestroy {
  appointments = [];
  subscription: Subscription;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.subscription = this.appointmentService.appointmentChanged
      .subscribe((appointments) => {
        console.log('the appointments: - in appointments-list', appointments);

        this.appointments = appointments.sort(this.compare);
      })
    this.appointments = this.appointmentService.getAppointments();
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private compare(a,b) {
    if (new Date(`${a.date}T${a.time}`) < new Date(`${b.date}T${b.time}`)) {
      return -1;
    }
    if (new Date(`${a.date}T${a.time}`) > new Date(`${b.date}T${b.time}`)) {
      return 1;
    }
    return 0;
  }
  
}

