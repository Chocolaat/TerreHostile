package org.terrehostile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.CommonsRequestLoggingFilter;
import org.terrehostile.game.configuration.model.BuildingConfigurationPropertyList;
import org.terrehostile.game.configuration.model.GroundConfigurationPropertyList;
import org.terrehostile.game.configuration.model.ResourceConfigurationPropertyList;
import org.terrehostile.game.configuration.model.UnitConfigurationPropertyList;

@SpringBootApplication
public class Application extends SpringBootServletInitializer {

	@Autowired
	private UnitConfigurationPropertyList unitsConfiguration;
	@Autowired
	private BuildingConfigurationPropertyList buildingsConfiguration;
	@Autowired
	private ResourceConfigurationPropertyList resourcesConfiguration;
	@Autowired
	private GroundConfigurationPropertyList groundsConfiguration;

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {

		return application.sources(Application.class);
	}

	public static void main(String[] args) throws Exception {

		// SpringApplication.run(Application.class, args);

		ConfigurableApplicationContext context = SpringApplication.run(Application.class, args);
		context.getBean(TestSch.class).launch();

	}

	@Bean
	public CommonsRequestLoggingFilter requestLoggingFilter() {
		CommonsRequestLoggingFilter loggingFilter = new CommonsRequestLoggingFilter();
		loggingFilter.setIncludeClientInfo(true);
		loggingFilter.setIncludeQueryString(true);
		loggingFilter.setIncludePayload(true);
		return loggingFilter;
	}

}