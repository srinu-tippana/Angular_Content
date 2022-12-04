import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  public Id:number=5;
  pupil:any[]=
  [
    {"sname":"John","city":"Chicago","age":21},
    {"sname":"Rebecca","city":"Seattle","age":22},
    {"sname":"Seth","city":"Buffalo","age":25}

  ]

  

  constructor() { }

  ngOnInit(): void {
  }

}
