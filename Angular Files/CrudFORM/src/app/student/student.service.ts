
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public api:string ="http://localhost:3000/students";

  constructor(private http: HttpClient)
   { }

   addStudent(stu: Student):Observable<Student>
   {
     return this.http.post<Student>(this.api,stu);

   }

   getAllStudents():Observable<Array<Student>>
   {
     return this.http.get<Array<Student>>(this.api);

   }
   deleteStudent(id:number):Observable<Student>
   {
     return this.http.delete<Student>(`${this.api}/${id}`);

     //http://localhost:3000/students/1

   }

}
