package org.terrehostile.player.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.player.repositories.StockRepository;

@Service
public class StockService {

	@Autowired
	private StockRepository stockRepository;

}
