package org.terrehostile.web.authentservices;

import org.terrehostile.business.admin.authentification.User;

public interface IUserService {
	public User findUserByEmail(String email);
	public void saveUser(User user);
}