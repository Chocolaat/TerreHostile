package org.terrehostile.authentification;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.terrehostile.business.authentification.models.Role;
import org.terrehostile.business.authentification.models.User;
import org.terrehostile.business.authentification.repositories.RoleRepository;
import org.terrehostile.business.authentification.repositories.UserRepository;
import org.terrehostile.business.web.ui.grids.FilterSortPaginateParams;
import org.terrehostile.business.web.ui.grids.GridPaginationResponse;

@Service("userService")
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	public User getUserById(int id) {
		return userRepository.findById(id).get();
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public GridPaginationResponse<User> getPaginatedUsers(FilterSortPaginateParams params) {

		GridPaginationResponse<User> gridPaginatedUsers = new GridPaginationResponse<User>();

		Sort sort = Sort.unsorted();
		if (!params.getSortName().isEmpty()) {
			sort = params.getSortOrder().equals("desc") ? Sort.by(params.getSortName()).descending()
					: Sort.by(params.getSortName()).ascending();
		}

		Pageable sortedByNameAsc = PageRequest.of(params.getPageNumber(), params.getPageSize(), sort);

		Page<User> userPageResult = userRepository.findAll(sortedByNameAsc);

		gridPaginatedUsers.setItemList(userPageResult.getContent());
		gridPaginatedUsers.setItemsCount(userPageResult.getTotalElements());

		return gridPaginatedUsers;
	}

	public void updateUser(User u) {
		userRepository.updateUserById(u.getName(), u.getEmail(), u.getStartXCoord(), u.getStartYCoord(), u.getUserId());
	}

	public User saveUser(User user) {
		user.setPassword(bcryptEncoder.encode(user.getPassword()));
		Role userRole = roleRepository.findByRole("ADMIN");
		user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
		return userRepository.save(user);
	}

	public void deleteUser(User user) {
		userRepository.delete(user);
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		User u = userRepository.findByName(username)
				.orElseThrow(() -> new UsernameNotFoundException("No user found with username " + username));

		return u;
	}

}