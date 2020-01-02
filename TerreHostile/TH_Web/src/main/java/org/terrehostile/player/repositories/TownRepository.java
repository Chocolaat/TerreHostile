package org.terrehostile.player.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.player.models.Town;

@Repository
public interface TownRepository extends JpaRepository<Town, Integer> {

}
