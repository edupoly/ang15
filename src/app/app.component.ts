import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
  styleUrls:['./app.component.css']
})
export class AppComponent {
  studentForm = new FormGroup(
    {
      firstname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname:new FormControl()
    }
  )
  get firstname(){
    return this.studentForm.controls['firstname']
  }
  ngOnInit(){
    console.log(this.studentForm)
  }
  save(){
    console.log(this.studentForm)
  }
}
