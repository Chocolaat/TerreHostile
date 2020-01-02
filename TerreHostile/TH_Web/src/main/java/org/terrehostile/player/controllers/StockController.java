package org.terrehostile.player.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.terrehostile.player.services.StockService;

@RestController
public class StockController {
	@Autowired
	private StockService stockService;

}
