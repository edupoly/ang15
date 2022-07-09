import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }
  newtask='';
  tasks = ['schoolbag','raincoat','veggies']
  ngOnInit(): void {
  }
  addTask(){
    this.tasks.push(this.newtask)
  }
  deleteTask(i:number){
    this.tasks.splice(i,1)
  }
}
