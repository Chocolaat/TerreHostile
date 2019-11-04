package org.terrehostile.common.user.controllers;

import java.util.List;

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
		return userService.getUserById(id);
	}

	@RequestMapping(value = "/user/getAll", method = RequestMethod.GET)
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public void updateUser(User u) {
		userService.updateUser(u);
	}

}