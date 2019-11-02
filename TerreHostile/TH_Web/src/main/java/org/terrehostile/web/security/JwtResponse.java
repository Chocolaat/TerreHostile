package org.terrehostile.web.security;

import java.io.Serializable;

import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;

@Getter
public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
	private final UserDetails userDetails;

	public JwtResponse(String jwttoken, UserDetails userDetails) {
		this.jwttoken = jwttoken;
		this.userDetails = userDetails;
	}

}