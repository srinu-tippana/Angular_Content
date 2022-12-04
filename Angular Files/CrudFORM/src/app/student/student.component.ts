import { Component, OnInit } from '@angular/core';
import {StudentService} from './student.service';
import {HttpClient} from '@angular/common/http';
import { Student } from './student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor( private _studentService:StudentService,private http:HttpClient) 
  { }


  ngOnInit(): void
  {
    this.viewAllStudents();
  }
  data:{};/* empty object*/

  stu:Student = new Student();/* stu is a object that has id name email*/
  students:Array<Student>=[]; /* an array of type student */

  /* all these method names you can change or keep it same  as in services class*/
  addStudentContact()
  {
    /* the data after subscribe is date method of subscribe */

    this._studentService.addStudent(this.stu).subscribe(data=>{
      console.log("Added to Json file",data);
      alert("diplayinf data in add student contact ");
      this.students.push(data);
      alert("after displaying data ");
      /* here data is like whole lumpsome wiht id email name fields*/

    },
    error=>
    {
      console.log(error); 
    }
    )
    this.stu= new Student();/* here this will create new student object in json */
  }
  viewAllStudents()
  {
      this._studentService.getAllStudents().subscribe(data=>
        {
          this.students=data;/* here studetns is an array into which we are putting data*/
          alert("going to display all data");

        },
        error=>
        {
          console.log(error);
        }
        )

  }
  deleteStudent(id:number)
  {
    alert("entered delete");
    /* here data => is returned by the subscribe method */
    this._studentService.deleteStudent(id).subscribe
    (
      data=>
      {
        alert("record delted");
        console.log("record deleted",data);
        let studentIndex = this.students.findIndex(stu=>stu.id===id);
        this.students.splice(studentIndex,1)
        /* it will work like apart from that particular index
         it will show  student index is that ondex from the array everything else */
        

      },
      error=>
      {
        console.log(error);
      }
      )
  }



}
