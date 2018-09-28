package org.terrehostile.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.terrehostile.business.map.MapBackgroundView;


@Repository("mapBackgroundViewRepository")
public interface MapBackgroundViewRepository extends JpaRepository<MapBackgroundView, Long> {
	
	 public MapBackgroundView findByBeginXCoordAndBeginYCoord(int x, int y);
	 
	 @Query("select * from map_background_view mbv where mbv.begin_x_coord >= ?1 and mbv.begin_x_coord <= ?2 and mbv.begin_y_coord >= ?3 and mbv.begin_y_coord <= ?4 order by begin_x_coord, begin_y_coord")
	 public List<MapBackgroundView> findByXYMinMax(int xBegin, int xEnd, int yBegin, int yEnd);
	 
}