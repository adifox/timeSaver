import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';

import { Appointment } from './appointment.model';

@Injectable()
export class AppointmentService {
  appointmentChanged = new Subject<Appointment[]>();

  private appointments: Appointment[] = [
    // { date: new Date("22-03-2018"), time: "09:00", place: "Madrid1" },
    // { date: new Date("23-03-2018"), time: "09:30", place: "Madrid1" },
    // { date: new Date("24-03-2018"), time: "09:00", place: "Madrid2" },
    // { date: new Date("25-03-2018"), time: "09:30", place: "Madrid2" }
  ];

  constructor(private http: Http) {}

  getAppointments() {
    return this.appointments.slice();
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    console.log('the appointments array:', this.appointments);
    this.http.put('https://enlista-303d4.firebaseio.com/appointments.json', this.appointments.slice())
      .subscribe((response: Response) => {
        console.log('the server response at store appoinment:', response);
      });
    this.appointmentChanged.next(this.appointments);
  }

  getAppointmentsByPlace(searchTerm: string) {
    let places = this.appointments.filter((appointment) => {
      return appointment.place === searchTerm ? appointment : null;
    });
    return places;
  }

}