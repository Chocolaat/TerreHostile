package org.terrehostile;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {

        return application.sources(Application.class);
    }

    public static void main(String[] args) throws Exception {
    	
   	SpringApplication.run(Application.class, args);
    	
  //      ConfigurableApplicationContext context = SpringApplication.run(Application.class, args);
  //      context.getBean(TestSch.class).launch(); 

    }

}