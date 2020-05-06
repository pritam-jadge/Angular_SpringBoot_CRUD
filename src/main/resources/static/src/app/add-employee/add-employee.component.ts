import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm : FormGroup;
  showHide : boolean;
  
  constructor(private formBuilder : FormBuilder, private _emplService : EmployeeService, private toastr : ToastrService) { }

  ngOnInit(): void 
  {
    this.employeeForm = this.formBuilder.group({
      name : [''],
      email : [''],
    });
    this.showHide = true;
  }

  onSubmit()
  {
    var employeeFormData = this.employeeForm.value;
    console.log(employeeFormData);
    this.saveEmployee(employeeFormData);
    this.showHide = false;
  }

  saveEmployee(employeeFormData)
  {  
    this._emplService.saveEmployee(employeeFormData).subscribe(data =>{
      /* this.showSuccess = false; */
      this.toastr.success("Employee Added Successfully");
    });
  }

  showForm_addMore()
  {
    this.showHide = true;
    this.employeeForm.reset();
  }
}
