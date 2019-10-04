package org.terrehostile.web.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Value("${spring.queries.users-query}")
	private String usersQuery;

	@Value("${spring.queries.roles-query}")
	private String rolesQuery;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

//		http.csrf().disable().authorizeRequests().antMatchers("/").permitAll().antMatchers("/").permitAll()
//				.antMatchers("/registration").permitAll().antMatchers("/admin/**").hasAuthority("ADMIN").anyRequest()
//				.authenticated().and().csrf().disable().formLogin().loginPage("/home").permitAll()
//				.failureUrl("/home?error=true").defaultSuccessUrl("/home").usernameParameter("email")
//				.passwordParameter("password").and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//				.logoutSuccessUrl("/").and().exceptionHandling().accessDeniedPage("/access-denied");
//		http.cors();

		http.csrf().disable().authorizeRequests().antMatchers("/").permitAll();
//		http.cors();
	}

//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//
//		http.csrf().disable().authorizeRequests().antMatchers("/").permitAll().antMatchers("/login").permitAll()
//				.antMatchers("/registration").permitAll().antMatchers("/admin/**").hasAuthority("ADMIN").anyRequest()
//				.authenticated().and().csrf().disable().formLogin().loginPage("/login").failureUrl("/login?error=true")
//				.defaultSuccessUrl("/admin/home").usernameParameter("email").passwordParameter("password").and()
//				.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/").and()
//				.exceptionHandling().accessDeniedPage("/access-denied");
//	}

//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//
////		http.csrf().disable().authorizeRequests().anyRequest().permitAll().antMatchers("/").permitAll()
////				.antMatchers("/login").permitAll().antMatchers("/home").permitAll().antMatchers("/registration")
////				.permitAll().antMatchers("/admin/**").permitAll().and().logout()
////				.logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/").and()
////				.exceptionHandling().accessDeniedPage("/access-denied");
//
////		http.authorizeRequests().antMatchers("/").permitAll().antMatchers("/login").permitAll().antMatchers("/home")
////				.permitAll().antMatchers("/registration").permitAll().antMatchers("/admin/**").hasAuthority("ADMIN")
////				.anyRequest().authenticated().and().csrf().disable().formLogin().loginPage("/login")
////				.failureUrl("/login?error=true").defaultSuccessUrl("/home").usernameParameter("email")
////				.passwordParameter("password").and().logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
////				.logoutSuccessUrl("/").and().exceptionHandling().accessDeniedPage("/access-denied");
//	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/img/**");
	}

}