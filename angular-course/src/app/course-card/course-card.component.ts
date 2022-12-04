import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {COURSES} from  '../../db-data';
import {Course} from '../model/course';
@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit 
{
  
 @Input()
 course:Course; /* rxjsCourse.description* this is the input */

 @Input()
 cardIndex:number;

 @Output()
 courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }
  onCourseViewed()
  {
    console.log("card component clicked");
    this.courseSelected.emit(this.course);
  }
  
}
