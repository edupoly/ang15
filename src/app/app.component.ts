import { Component } from '@angular/core';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
})
export class AppComponent {
  todos:any=[];
  newtodo='';
  addTodo(){
    this.todos.push(this.newtodo);
    console.log(this.todos)
  }
}
