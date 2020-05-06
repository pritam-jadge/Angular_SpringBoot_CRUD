package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.EmployeeDAO;
import com.example.model.Employee;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	EmployeeDAO employeeDao;
	
	@Override
	public boolean saveEmployee(Employee employee) 
	{
		return employeeDao.saveEmployee(employee);
	}

	@Override
	public List<Employee> showEmployee() {
		
		return employeeDao.showEmployee();
	}

	@Override
	public boolean deleteEmployee(Integer id) {
		return employeeDao.deleteEmployee(id);
	}
	
	@Override
	public Employee getEmployeeById(int id) {
		
		return employeeDao.getEmployeeById(id);
	}

	@Override
	public boolean updateEmployee(int id, Employee employee) {
		
		return employeeDao.updateEmployee(id, employee);
	}

	
}
