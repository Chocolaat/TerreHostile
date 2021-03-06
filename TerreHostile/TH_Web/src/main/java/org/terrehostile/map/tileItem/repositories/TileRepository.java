package org.terrehostile.map.tileItem.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.map.models.CoordinatesKey;
import org.terrehostile.map.models.Tile;

@Repository
public interface TileRepository extends JpaRepository<Tile, CoordinatesKey> {

	@Query("select new Tile(tile.xCoord, tile.yCoord, tile.background, tile.height) from Tile tile where xCoord >= ?1 and xCoord <= ?2 and yCoord >= ?3 and yCoord <= ?4 order by yCoord, xCoord")
	public List<Tile> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);

	public Tile findByXCoordAndYCoord(int x, int y);

}