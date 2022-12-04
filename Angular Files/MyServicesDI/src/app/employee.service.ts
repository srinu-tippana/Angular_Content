
import { ErrorHandler,Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs'; 
import {Employee} from './employee'
import {catchError} from 'rxjs/operators';
import {HttpClient,HttpClientModule,HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>/* whatever data we got we stored it in observables*/
  {
    return this.http.get<Employee[]>("http://localhost:3000/employee")/* this is fetching from local host 3000  using get and will be dropped into employee */ 
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse)
  {
    return throwError(error.message);
  }
}
