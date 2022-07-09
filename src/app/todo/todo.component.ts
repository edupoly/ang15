import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() task:any;
  @Input() ind:any;//0
  @Output() deleteEvent = new EventEmitter();
  delTask(){
    this.deleteEvent.emit(this.ind);
  }
}
