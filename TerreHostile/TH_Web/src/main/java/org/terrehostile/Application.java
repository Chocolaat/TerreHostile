package org.terrehostile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.web.filter.CommonsRequestLoggingFilter;
import org.terrehostile.business.admin.authentification.User;
import org.terrehostile.repository.UserRepository;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

//	@Autowired
//	private UnitConfigurationPropertyList unitsConfiguration;
//	@Autowired
//	private BuildingConfigurationPropertyList buildingsConfiguration;
//	@Autowired
//	private ResourceConfigurationPropertyList resourcesConfiguration;
//	@Autowired
//	private GroundConfigurationPropertyList groundsConfiguration;

	@Autowired
	UserRepository userRepo;

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {

		return application.sources(Application.class);
	}

	public static void main(String[] args) throws Exception {

		SpringApplication.run(Application.class, args);

//		ConfigurableApplicationContext context = SpringApplication.run(Application.class, args);
//		context.getBean(TestSch.class).launch();

	}

	@EventListener(ApplicationReadyEvent.class)
	public void doSomethingAfterStartup() {
		System.out.println("hello world, I have just started up");
		User u = userRepo.findByName("titi").get();

		// System.out.println(u.toString());

	}
//	@Bean
//	protected Module module() {
//		return new Hibernate5Module();
//	}

	@Bean
	public CommonsRequestLoggingFilter requestLoggingFilter() {
		CommonsRequestLoggingFilter loggingFilter = new CommonsRequestLoggingFilter();
		loggingFilter.setIncludeClientInfo(true);
		loggingFilter.setIncludeQueryString(true);
		loggingFilter.setIncludePayload(true);
		return loggingFilter;
	}

}