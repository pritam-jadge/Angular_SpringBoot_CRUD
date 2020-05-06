  import { Injectable } from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import {Employees} from './Employees';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {

    constructor(private http: HttpClient) { }

    employeeUrl = 'http://localhost:8888/crud_example/';

    saveEmployeeUrl = 'save_employee';
    deleteEmployeeUrl = 'delete_employee/';
    getEmployeeByIdUrl = 'get_employee_by_id/';
    updateEmployeeUrl = 'update_employee/';

    showEmployees(): Observable<any>
    {
      return this.http.get<any>('http://localhost:8888/crud_example/show_employees');
    }

    getEmployeeById(id: number): Observable<Employees>
    {
      return this.http.get<Employees>(this.employeeUrl + this.getEmployeeByIdUrl + id);
    }

    saveEmployee(employee: any): Observable<any>
    {
      return this.http.post(this.employeeUrl + this.saveEmployeeUrl, employee);
      /* return this.http.post<Employees>(this.employeeUrl, employee); */
    }

    deleteEmloyee(id: number): Observable<any>
    {
      return this.http.delete<any>(this.employeeUrl + this.deleteEmployeeUrl + id);
    }

    updateEmployee(emp: Employees): Observable<number>
    {
      return this.http.put<number>(this.employeeUrl + this.updateEmployeeUrl + emp.id, emp);
    }
  }
