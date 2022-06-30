import { Component } from '@angular/core';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
})
export class AppComponent {
  gender=null;
  selectedTech='';
  title = 'ang15';
  students = ['rahul','divya','priya','kumar','himaja','gauri','thirumala'];
  mydetails = {
    firstname:'praveen',
    lastname:'gubbala',
    age:39
  }
  employees = [
    {
      ename:'rohit',
      salary:34000
    },
    {
      ename:'tamoli',
      salary:74000
    },
    {
      ename:'ravali',
      salary:72200
    }
  ]
}
