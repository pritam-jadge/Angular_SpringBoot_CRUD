package com.example.service;

import java.util.List;

import com.example.model.Employee;

public interface EmployeeService {
	
	public boolean saveEmployee(Employee employee);
	
	public List<Employee> showEmployee();

	public boolean deleteEmployee(Integer id);

	public boolean updateEmployee(int id, Employee employee);

	public Employee getEmployeeById(int id);
	
}
