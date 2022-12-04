import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService:EmployeeService) { 

  }
  public emp1=[]

  ngOnInit(): void 
  {
    this._employeeService.getEmployees().subscribe(data=>this.emp1=data);
  }

}
