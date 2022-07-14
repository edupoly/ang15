import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthService {

  constructor() { }
  add(a:any,b:any){
    return Number(a)+Number(b);
  }
  sub(a:any,b:any,cb:any){
    cb(a-b);
  }
  mul(a:any,b:any){
    return Promise.resolve(a*b)
  }
}
