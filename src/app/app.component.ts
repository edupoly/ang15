import { Component } from '@angular/core';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
  styleUrls:['./app.component.css']
})
export class AppComponent {
  students=[
    {
      name:'geetha',
      gender:'female',
      online:false
    },
    {
      name:'jayashankar',
      gender:'male',
      online:false
    },
    {
      name:'praveen',
      gender:'male',
      online:true
    },
    {
      name:'divya',
      gender:'female',
      online:true
    },
    {
      name:'mohan',
      gender:'male',
      online:false
    },
    {
      name:'srinu',
      gender:'male',
      online:false
    },
  ]
}
