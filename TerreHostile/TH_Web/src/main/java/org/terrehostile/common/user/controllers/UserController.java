package org.terrehostile.common.user.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.business.admin.authentification.User;
import org.terrehostile.common.user.services.UserService;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public User getUser(int id) {
		User user = userService.findUserById(id);
		return user;
	}

}