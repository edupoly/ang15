import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XYZComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() cevent = new EventEmitter();

  foo(){
    this.cevent.emit();
  }

}
