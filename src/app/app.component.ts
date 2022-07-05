import { Component } from '@angular/core';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
  styleUrls:['./app.component.css']
})
export class AppComponent {
  todos:any=[
    {
      title:'gym',
      status:false
    },
    {
      title:'coffee',
      status:true
    },
    {
      title:'itr',
      status:false
    },
    {
      title:'schoolfee',
      status:true
    },
    {
      title:'rent',
      status:true
    },
    {
      title:'loan',
      status:false
    }
  ];
  newtodo='';
  addTodo(){
    this.todos.push(this.newtodo);
    console.log(this.todos)
  }
}
