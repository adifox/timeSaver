import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AppointmentService } from '../components/create-appointment/appointment.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http,
              private appointmentService: AppointmentService) {}

  storeAppointments() {
    this.http.post('https://enlista-303d4.firebaseio.com/appointments.json', this.appointmentService.getAppointments());
  }

  getAppointments() {
    this.http.get('https://enlista-303d4.firebaseio.com/appointments.json')
      .subscribe((response: Response) => {
        console.log('The response from the server:', response);
      });
  }
}