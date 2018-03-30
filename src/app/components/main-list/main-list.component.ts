import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';

import { AppointmentService } from '../create-appointment/appointment.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  appointments = [];
  mainList: FormGroup;

  constructor(private appointmentService: AppointmentService,
              private http: Http) { }

  ngOnInit() {
    this.mainList = new FormGroup({
      'place': new FormControl('Selecciona...', Validators.required)
    })
  }

  onGetAppointments() {
    this.http.get('https://enlista-303d4.firebaseio.com/appointments.json')
      .subscribe((response: Response) => {
        this.appointments = this.sortAppoinments(response.json(), this.mainList.value.place);
      })
  }

  private sortAppoinments(appointments, searchTerm) {
    let places = appointments.filter((appointment) => {
      return appointment.place === searchTerm ? appointment : null;
    });
    return places;
  }

}
