import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  @Input() iv:any;
  @Input() step:any;
  count:any;
  
  ngOnInit(): void {
    this.count=this.iv;
  }
  incrementCount(){
    this.count=Number(this.count)+Number(this.step);
  }
  decrementCount(){
    this.count=Number(this.count)-Number(this.step);
  }
}
