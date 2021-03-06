package org.terrehostile.authentification.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.authentification.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
	Role findByRole(String role);

}