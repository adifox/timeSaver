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
        const appo = response.json();
        console.log('Your appointments are serverd:', appo.date);
        // this.appointments = response.json();
        // this.appointments = this.sortAppoinments(response.json(), 'Madrid1');
      })
      
    // this.appointments = this.appointmentService.getAppointmentsByPlace(this.mainList.value.place);
    // console.log('this.appointments: ', this.appointments);
  }

  private sortAppoinments(appointments, searchTerm) {
    console.log('the appointments from server:', appointments);
    let places = this.appointments.filter((appointment) => {
      console.log('in the sortFunction appointment:', appointment);
      return appointment.place === searchTerm ? appointment : null;
    });
    console.log('the result:', places);
    return places;
  }

}
