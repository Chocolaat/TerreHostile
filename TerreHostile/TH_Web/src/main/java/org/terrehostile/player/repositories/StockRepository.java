package org.terrehostile.player.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.terrehostile.player.models.Stock;

@Repository
public interface StockRepository extends JpaRepository<Stock, Integer> {

}
