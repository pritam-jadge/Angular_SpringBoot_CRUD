package com.example.appconfig;

import org.springframework.boot.builder.SpringApplicationBuilder;


public class ServletInitializer extends org.springframework.boot.web.support.SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) 
	{
		return application.sources(EmployeeCrudApplication.class);
	}

}
