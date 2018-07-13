package org.terrehostile.web.services.admin.user;

import org.terrehostile.business.admin.user.User;

public interface IUserService {
	public User findUserByEmail(String email);
	public void saveUser(User user);
}