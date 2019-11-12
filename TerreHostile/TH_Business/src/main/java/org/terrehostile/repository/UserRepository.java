package org.terrehostile.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.terrehostile.business.admin.authentification.User;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByEmail(String email);

	Optional<User> findByName(String name);

	@Transactional
	@Modifying
	@Query("update User u set u.name = ?1, u.email = ?2, u.startXCoord = ?3 , u.startYCoord = ?4 where u.id = ?5")
	void updateUserInfosById(String name, String email, int startXCoord, int startYCoord, Integer userId);

}