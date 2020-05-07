package com.example.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.model.Employee;

@Transactional
@Repository
public class EmployeeDAOImpl implements EmployeeDAO {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public boolean saveEmployee(Employee employee) 
	{
		boolean status = false;

		try {
			Session session = sessionFactory.openSession();
			session.getSessionFactory();
			session.beginTransaction();
			session.saveOrUpdate(employee);
			session.flush();
			session.getTransaction().commit();
			session.close();
			System.out.println("save Dao");
			status = true;
		} 
		catch (Exception e) {
			e.printStackTrace();
		}

		return status;
	}

	@Override
	public List<Employee> showEmployee() {

		Session session  = sessionFactory.openSession();
		session.getSessionFactory();
		session.beginTransaction();
		Query query = session.createQuery("from Employee");
		@SuppressWarnings("unchecked")
		List<Employee> list = query.list();
		session.getTransaction().commit();
		session.close();
		return list;
	}

	@Override
	public boolean deleteEmployee(Integer id) {

		Session session  = sessionFactory.openSession();
		session.getSessionFactory();
		session.beginTransaction();
		Query query = session.createQuery("delete from Employee emp where emp.id = :emp_id");
		query.setParameter("emp_id", id);
		query.executeUpdate();
		session.getTransaction().commit();
		session.close();
		return true;
	}

	@Override
	public Employee getEmployeeById(int id) {

		Session session = sessionFactory.openSession();
		session.getSessionFactory();
		session.beginTransaction();
		return session.get(Employee.class, id);
	}

	@Override
	public boolean updateEmployee(int id, Employee employee) {

		try {
			Session session = sessionFactory.openSession();
			session.getSessionFactory();
			session.beginTransaction();
			Query query = session.createQuery("update Employee set name = :emp_name, email = :emp_email where id = :emp_id");
			query.setParameter("emp_name",employee.getName());
			query.setParameter("emp_email",employee.getEmail());
			query.setParameter("emp_id",id);
			query.executeUpdate();
			session.flush();
			session.getTransaction().commit();
			session.close();
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return true;
	}
}