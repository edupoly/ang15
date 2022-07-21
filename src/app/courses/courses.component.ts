import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  courses = [
    {
      name:'Angular14',
      fee:15000,
      duration:'2months',
      trainer:'Dhrithiman'
    },
    {
      name:'ReactJS',
      fee:20000,
      duration:'2months',
      trainer:'Praveen'
    },
    {
      name:'NodeJSwithExpressMongo',
      fee:25000,
      duration:'2months',
      trainer:'Ramesh'
    }
  ]
}
