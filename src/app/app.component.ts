import { Component } from '@angular/core';
import { ArthService } from './arth.service';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
  styleUrls:['./app.component.css']
})
export class AppComponent {
  x:any;
  y:any;
  res:any='';
  constructor(public as:ArthService){}
  addition(){
    this.res = this.as.add(this.x,this.y);
    console.log("hi...");
  }
  substraction(){
    this.as.sub(this.x,this.y,(data:any)=>{this.res = data})
  }
  multiply(){
    this.as.mul(this.x,this.y).then((data)=>{this.res=data;})
  }
}
