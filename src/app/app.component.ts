import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';
import { Employees } from './Employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeCRUD';
}
