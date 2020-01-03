package org.terrehostile.player.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.player.models.Town;

@Repository
public interface TownRepository extends JpaRepository<Town, Integer> {

	@Query(value = "SELECT * FROM towns WHERE SQRT(POWER((?1 - centerx), 2) + POWER((centery - ?2), 2) ) <= 5", nativeQuery = true)
	public Optional<Town> getTownByCoords(int x, int y);
}
