package org.terrehostile.player.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.terrehostile.authentification.models.User;
import org.terrehostile.player.models.Town;
import org.terrehostile.player.repositories.StockRepository;
import org.terrehostile.player.repositories.TownRepository;

@Service
public class TownService {

	@Autowired
	private TownRepository townRepository;

	@Autowired
	private StockRepository stockRepository;

	public Town saveTown(Town t) {
		return townRepository.save(t);
	}

	public Town createTown(int centerX, int centerY, String name) {

		// Stock stocks = new Stock();

		Town newTown = new Town();
		// newTown.setStocks(stocks);
		newTown.setName(name);
		newTown.setCenterX(centerX);
		newTown.setCenterY(centerY);

		// stocks = stockRepository.save(stocks);

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = (User) auth.getPrincipal();

		newTown.setUser(user);

		return townRepository.save(newTown);
	}

}
