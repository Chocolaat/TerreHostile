package org.terrehostile.repository;

import java.util.List;

import org.springframework.data.geo.Point;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.MapTile;
import org.terrehostile.business.map.MapViewPart;


@Repository("mapTileRepository")
public interface MapTileRepository extends JpaRepository<MapTile, Long> {
	
	 public MapTileRepository findByCoordinate(Point coordinate);
	 
	 @Query("select mapTile from MapTiles mapTile where mapTile.beginXCoord >= ?1 and mapViewPart.beginXCoord <= ?2 and mapViewPart.beginYCoord >= ?3 and mapViewPart.beginYCoord <= ?4 order by beginYCoord, beginXCoord")
	 public List<MapViewPart> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);
	 
}