package org.terrehostile.player.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.player.models.Town;
import org.terrehostile.player.services.TownService;

@RestController
public class TownController {
	@Autowired
	private TownService townService;

	@RequestMapping(value = "/town/create", method = RequestMethod.POST)
	public Town createTown(int centerX, int centerY, String name) {
		return townService.createTown(centerX, centerY, name);
	}

}
