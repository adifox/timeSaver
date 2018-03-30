import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AppointmentService } from './appointment.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  appointmentForm: FormGroup;

  constructor(private appointmentService: AppointmentService,
              private dataStorage: DataStorageService) { }

  ngOnInit() {
    this.appointmentForm = new FormGroup({
      'date': new FormControl(null, Validators.required),
      'time': new FormControl(null, Validators.required),
      'place': new FormControl(null, Validators.required)
    })
  }

  onCreateAppointment() {
    this.appointmentService.addAppointment(this.appointmentForm.value);
    this.appointmentForm.reset();
  }

  onCancel() {
    this.appointmentForm.reset();
  }

}
