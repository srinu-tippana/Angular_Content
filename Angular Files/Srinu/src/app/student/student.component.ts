import { Component, OnInit } from '@angular/core';
import {STUDENT} from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //public student =['Rakesh','Koel','ASha'];
  display=(100>1000);

  student=STUDENT;
  pupil:any[]=
  [
    {"sname":"John","city":"Chicago","age":23},
    {"sname":"Rebecca","city":"Seattle","age":22},
    {"sname":"Seth","city":"BUffalo","age":24}

  ]

  constructor() 
  {

   }

  ngOnInit(): void {
  }

}
