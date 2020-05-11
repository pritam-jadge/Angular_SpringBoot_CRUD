package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Employee;
import com.example.service.EmployeeService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/crud_example")
public class EmployeeController {
	@Autowired
	EmployeeService employeeService;

	@PostMapping("save_employee")
	public boolean saveEmployee(@RequestBody Employee employee) {
		return employeeService.saveEmployee(employee);
	}

	@GetMapping("show_employees")
	public List<Employee> showEmployees() {
		System.out.println("get");
		return employeeService.showEmployee();
	}

	@DeleteMapping("delete_employee/{emp_id}")
	public boolean deleteEmployee(@PathVariable("emp_id") int id) {
		employeeService.deleteEmployee(id);
		return true;
	}

	@GetMapping("get_employee_by_id/{emp_id}")
	public Employee getEmployeeById(@PathVariable("emp_id") int id) {
		return employeeService.getEmployeeById(id);
	}

	@PutMapping("update_employee/{emp_id}")
	public boolean updateEmployee(@PathVariable("emp_id") int id, @RequestBody Employee employee) {
		System.out.println(employee.getId());
		System.out.println(employee.getName());
		System.out.println(employee.getEmail());
		System.out.println("update Employee");
		return employeeService.updateEmployee(id, employee);
	}
}
