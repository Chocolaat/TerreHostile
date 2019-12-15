package org.terrehostile.map.tileItem.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.map.models.MapView;
import org.terrehostile.map.tileItem.services.MapViewService;

@RestController
public class MapViewControler {

	@Autowired
	private MapViewService mapViewService;

	@RequestMapping(value = { "/map" }, method = RequestMethod.GET)
	@ResponseBody
	public MapView getMapByXYAndSize(@RequestParam int beginX, int beginY, int size) {

		MapView map = mapViewService.getMapByXYAndSize(beginX, beginY, size, size);

		return map;
	}

	@RequestMapping(value = "/map", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void saveMap(@RequestBody MapView map) {

		mapViewService.save(map);

	}

}
