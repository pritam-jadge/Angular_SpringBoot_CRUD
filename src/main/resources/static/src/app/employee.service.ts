import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employees} from './Employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  employeeUrl = 'http://localhost:8888/crud_example/';

  save_employee = 'save_employee';
  delete_employee ="delete_employee/";
  get_employee_by_id ="get_employee_by_id/";
  update_employee = "update_employee/";
  
  showEmployees() : Observable<any>
  {
    return this.http.get<any>("http://localhost:8888/crud_example/show_employees");
  }

  getEmployeeById(id : number) : Observable<Employees>
  {
    return this.http.get<Employees>(this.employeeUrl+this.get_employee_by_id+id);
  }

  saveEmployee(employee : Object) : Observable<Object>
  {
    return this.http.post(this.employeeUrl+this.save_employee, employee);
    /* return this.http.post<Employees>(this.employeeUrl, employee); */
  }

  deleteEmloyee(id : number) : Observable<any>
  {
    return this.http.delete<any>(this.employeeUrl+this.delete_employee+id);
  }

  updateEmployee(emp : Employees) : Observable<number>
  {
    return this.http.put<number>(this.employeeUrl+this.update_employee+emp.id, emp);
  }
}
