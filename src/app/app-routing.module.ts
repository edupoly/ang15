import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'courses',
    component:CoursesComponent,
    children:[
      {
        path:":course",
        component:CoursedetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
