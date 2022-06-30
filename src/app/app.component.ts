import { Component } from '@angular/core';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
})
export class AppComponent {
  abc(){
    alert("HI")
  }
  ar = [12,28,22,19,25];
  xyz(v:any){
    alert(v)
  }
}
