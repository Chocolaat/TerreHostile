package org.terrehostile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.MapViewPart;


@Repository("mapViewPartRepository")
public interface MapViewPartRepository extends JpaRepository<MapViewPart, Long> {
	
	 public MapViewPartRepository findByBeginXCoordAndBeginYCoord(int x, int y);
	 
	 @Query("select mapViewPart from MapViewPart mapViewPart where mapViewPart.beginXCoord >= ?1 and mapViewPart.beginXCoord <= ?2 and mapViewPart.beginYCoord >= ?3 and mapViewPart.beginYCoord <= ?4 order by beginYCoord, beginXCoord")
	 public List<MapViewPart> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);
	 
}