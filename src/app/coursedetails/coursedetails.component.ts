import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor(public aR:ActivatedRoute) { }
  selectedCourse:any;
  ngOnInit(): void {
    this.aR.queryParams.subscribe((details)=>{
      this.selectedCourse=details;
    })
  }

}
