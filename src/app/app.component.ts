import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'myroot',
  templateUrl:"./app.component.html",
  styleUrls:['./app.component.css']
})
export class AppComponent {
  constructor(public http:HttpClient){}
  countries:any=[];
  searchKey:string='';
  filteredCountries:any=[];
  getCountries(){
    this.http.get("https://restcountries.com/v2/all").subscribe((res)=>{
      this.countries=res;
      this.filteredCountries=res;
    })
  }
  ngOnInit(){
    this.getCountries()
  }
  filterBySearch(){
    var searchResults = this.countries.filter((c:any)=>{
      var str = JSON.stringify(c)
      if(str.includes(this.searchKey)){
        return true
      }
      else{
        return false
      }
    })
    this.filteredCountries=searchResults;
  }
  sortByPopulation(){
    this.countries.sort((a:any,b:any)=>{
      if(a.population>b.population){
        return -1
      }
      else{
        return 1
      }
    })
  }
  sortByArea(){
    this.countries.sort((a:any,b:any)=>{
      if(a.area>b.area){
        return -1
      }
      else{
        return 1
      }
    })
  }
}
