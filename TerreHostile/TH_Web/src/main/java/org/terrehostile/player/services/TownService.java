package org.terrehostile.player.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.terrehostile.authentification.models.User;
import org.terrehostile.player.models.Stock;
import org.terrehostile.player.models.Town;
import org.terrehostile.player.repositories.TownRepository;

@Service
public class TownService {

	@Autowired
	private TownRepository townRepository;

	public Town saveTown(Town t) {
		return townRepository.save(t);
	}

	public Town createTown(int centerX, int centerY, String name) {

		Town newTown = new Town();
		Stock stocks = new Stock();

		newTown.setStocks(stocks);
		newTown.setName(name);
		newTown.setCenterX(centerX);
		newTown.setCenterY(centerY);

		stocks.setTown(newTown);

		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		User user = (User) auth.getPrincipal();

		newTown.setUser(user);
		newTown = townRepository.save(newTown);
		newTown.setUser(null);

		return townRepository.save(newTown);
	}

}
