package org.terrehostile.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.repository.BuildingRepository;

@Service("buildingService")
public class BuildingService {
	

	@Autowired
	private BuildingRepository buildingRepository;
	

	public void save(Building building) {
		buildingRepository.save(building); 
	}
	
}