package org.terrehostile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.MapBackgroundView;


@Repository("mapBackgroundViewRepository")
public interface MapBackgroundViewRepository extends JpaRepository<MapBackgroundView, Long> {
	
	 public MapBackgroundView findByBeginXCoordAndBeginYCoord(int x, int y);
	 
	 @Query("select mbv from MapBackgroundView mbv where mbv.beginXCoord >= ?1 and mbv.beginXCoord <= ?2 and mbv.beginYCoord >= ?3 and mbv.beginYCoord <= ?4 order by beginYCoord, beginXCoord")
	 public List<MapBackgroundView> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);
	 
}