package org.terrehostile.web.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
@ComponentScan
public class WebMvcConfig implements WebMvcConfigurer {

	// private ApplicationContext applicationContext;

	public WebMvcConfig() {
		super();
	}

	@Bean
	public BCryptPasswordEncoder passwordEncoder() {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		return bCryptPasswordEncoder;
	}

//	public void setApplicationContext(final ApplicationContext applicationContext) throws BeansException {
//		this.applicationContext = applicationContext;
//	}

//	@Override
//	public void addResourceHandlers(ResourceHandlerRegistry registry) {
//		registry.addResourceHandler("/img/**", "/css/**", "/js/**").addResourceLocations("/WEB-INF/static/img/",
//				"/WEB-INF/static/css/", "/WEB-INF/static/js/");
//	}

	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**");
	}

}