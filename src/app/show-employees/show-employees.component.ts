import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employees } from '../Employees';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css'],
  providers: [EmployeeService]
})
export class ShowEmployeesComponent implements OnInit {

  allEmployees : any;
  hideForm :boolean;
  employeeEditForm : FormGroup;

  constructor(private _empService : EmployeeService, private _fb : FormBuilder, private toastr : ToastrService) { }

  ngOnInit(): void {

    this.employeeEditForm = this._fb.group({
      id : [],
      name : [],
      email : []
    });
    
  /* using async   

  this.allEmployees = this._empService.showEmployees();
  console.log(this.allEmployees);
 */
    this._empService.showEmployees().subscribe(data => {
      this.allEmployees = data;
      console.log(data);
    });

    this.hideForm = true;
  }

  editEmployee(id : number)
  {
    this.hideForm = false;

    this._empService.getEmployeeById(id).subscribe(empl => {
      this.employeeEditForm.controls['id'].setValue(empl.id);
      this.employeeEditForm.controls['name'].setValue(empl.name);
      this.employeeEditForm.controls['email'].setValue(empl.email);
    });
  }

  deleteEmployee(id :number)
  {
    console.log("Delete ID :" +id);
   this._empService.deleteEmloyee(id).subscribe(data => {
    this._empService.showEmployees().subscribe(data => {
      this.allEmployees = data;
      this.toastr.info("Employee Deleted Succesfully");
      console.log(data);
    });
   });
  }

  updateEmployee()
  {
    var employeeFormValues = this.employeeEditForm.value;

     this._empService.updateEmployee(employeeFormValues).subscribe(data => {
      this._empService.showEmployees().subscribe(data => {
        this.allEmployees = data;
        console.log(data);
        this.hideForm = true;
        this.toastr.success("Employee Updated Succesfully");
      });
    });

  }
}
