export class Appointment {
  date: Date = new Date();
  time: any;
  place: string = '';

  constructor(date, time: any, place: string) {
    this.date  = date;
    this.time  = time;
    this.place = place;
  }
}