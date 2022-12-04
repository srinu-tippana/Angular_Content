import { Component, OnInit } from '@angular/core';
import {Faculty} from './faculty';
/*  here faculty is class*/

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit 
{

  /* got the class Faculty create an object for it so that 
  we can use it */
  facObj:Faculty;


  constructor()
   { 
    this.facObj=new Faculty('John','john@gmail.com',9876543210);
    /* created object and now passing values to it */
  }
  
  myTmpVarShow(value)
  {
    console.log(value);
  }

  ngOnInit(): void {
  }

}
