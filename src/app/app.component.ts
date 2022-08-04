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
      lastname:new FormControl(),
      gender:new FormControl(null,[Validators.required]),
      dob:new FormControl(null,[Validators.required]),
      username:new FormControl('',[Validators.required],[this.checkUniqueUsername])
    },this.checkMajor.bind(this)
  )
  checkUniqueUsername(fc:any):any{
    console.log(fc)
    var errorPromise=new Promise((resolve,rejected)=>{
      fetch(`https://api.github.com/users/${fc.value}`)
      .then(res=>res.json())
      .then(data=>{
        if(data.message==='Not Found'){
          resolve(null)
        }
        else{
          resolve({usernameError:'already there'})
        }
      })
    });
    
    return errorPromise;
  }
  checkMajor(fg:any):any{
    var gender = fg.get('gender').value;
    var dob = fg.get('dob').value;
    var ct = Date.now();
    var st = (new Date(dob)).getTime();
   
    var age = (ct-st)/(1000*60*60*24*365);

    if(age<18 && st){
      if(fg.get('gender').value==='male'){
        return {
          ageError:'you are still young, try after your 21th birthday'
        }
      }
      else{
        return {
          ageError:'you are still young, try after your 18th birthday'
        }
      }
    }
    else{
      
      if(fg.controls['gender'].value==='male' && age<21){
        return {
          ageError:'Male must be more than 21'
        }
      }
    }
  }
  get firstname(){
    return this.studentForm.controls['firstname']
  }
  get dob(){
    return this.studentForm.get('dob')
  }
  get username(){
    return this.studentForm.get('username')
  }
  ngOnInit(){
    //console.log(this.studentForm)
  }
  save(){
    console.log(this.studentForm)
  }
}
