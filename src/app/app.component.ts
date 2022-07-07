import { Component } from '@angular/core';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
  styleUrls:['./app.component.css']
})
export class AppComponent {
  mysal=1234.4;
  today='3/15/2033'
  students=[
    {
      firstname:'rahul',
      age:34
    },
    {
      firstname:'abhilash',
      age:44
    },
    {
      firstname:'kira',
      age:77
    },
    {
      firstname:'praveen',
      age:39
    },
  ]
  sortbyname(){
    this.students.sort((a,b)=>{
      return a.firstname>b.firstname?1:-1
    })
  }
  sortbyage(){
    this.students.sort((a,b)=>{
      return a.age>b.age?1:-1
    })
  }
}
