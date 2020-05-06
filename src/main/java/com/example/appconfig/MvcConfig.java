package com.example.appconfig;

import javax.persistence.EntityManagerFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.vendor.HibernateJpaSessionFactoryBean;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {

	@Bean
	public HibernateJpaSessionFactoryBean sessionFactoryBean(EntityManagerFactory entityManagerFactory) {
		HibernateJpaSessionFactoryBean jpaSessionFactoryBean = new HibernateJpaSessionFactoryBean();
		jpaSessionFactoryBean.setEntityManagerFactory(entityManagerFactory);
		return jpaSessionFactoryBean;
	}
}
