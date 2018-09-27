package org.terrehostile.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.business.map.Map;
import org.terrehostile.repository.MapRepository;


@Service("mapService")
public class MapService {

	@Autowired
	private MapRepository mapRepository;
	
	
	public Map findMapById(int id) {
		return mapRepository.findMapById(id);
	}

	public void saveMap(Map map) {
		mapRepository.save(map);
	}

}