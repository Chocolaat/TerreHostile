package org.terrehostile.authentification;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.business.authentification.models.User;
import org.terrehostile.business.web.ui.grids.FilterSortPaginateParams;
import org.terrehostile.business.web.ui.grids.GridPaginationResponse;

@RestController
public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/user", method = RequestMethod.GET)
	public User getUser(int id) {
		return userService.getUserById(id);
	}

	@RequestMapping(value = "/user/getAll", method = RequestMethod.GET)
	public List<User> getAllUsersForGrid(FilterSortPaginateParams params) {
		return userService.getAllUsers();
	}

	@RequestMapping(value = "/user/getPaginated", method = RequestMethod.GET)
	public GridPaginationResponse<User> getPaginatedUsers(FilterSortPaginateParams params) {
		return userService.getPaginatedUsers(params);
	}

	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public void updateUser(@RequestBody User u) {
		userService.updateUser(u);
	}

	@RequestMapping(value = "/user/create", method = RequestMethod.POST)
	public void createUser(@RequestBody User u) {
		userService.saveUser(u);
	}

	@RequestMapping(value = "/user/delete", method = RequestMethod.POST)
	public void deleteUser(@RequestBody User u) {
		userService.deleteUser(u);
	}

}