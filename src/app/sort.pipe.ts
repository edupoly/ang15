import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    console.log("value:::",value)
    console.log("args:::",args)
    value.sort((a:any,b:any)=>{
      return a[args[0]]>b[args[0]]?1:-1
    })
    return value;
  }

}
