package org.terrehostile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.Tile;


@Repository("tileRepository")
public interface TileRepository extends JpaRepository<Tile, Long> {
	
	 public TileRepository findByCoordinate(int xCoord, int yCoord);
	 
	 @Query("select Tile from mapview Tile where xCoord >= ?1 and xCoord <= ?2 and yCoord >= ?3 and yCoord <= ?4 order by yCoord, xCoord")
	 public List<Tile> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);
	 
}