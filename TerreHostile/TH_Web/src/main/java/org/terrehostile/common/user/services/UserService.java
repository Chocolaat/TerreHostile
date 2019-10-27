package org.terrehostile.common.user.services;

import java.util.Arrays;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.terrehostile.business.admin.authentification.Role;
import org.terrehostile.business.admin.authentification.User;
import org.terrehostile.repository.RoleRepository;
import org.terrehostile.repository.UserRepository;

@Service("userService")
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	public User findUserByEmail(String email) {
		return userRepository.findByEmail(email).get();
	}

	public User findUserById(int id) {
		return userRepository.findById(id).get();
	}

	public User saveUser(User user) {
		user.setPassword(bcryptEncoder.encode(user.getPassword()));
		Role userRole = roleRepository.findByRole("ADMIN");
		user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
		return userRepository.save(user);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		User u = userRepository.findByName(username)
				.orElseThrow(() -> new UsernameNotFoundException("No user found with username " + username));

		return u;
	}

}