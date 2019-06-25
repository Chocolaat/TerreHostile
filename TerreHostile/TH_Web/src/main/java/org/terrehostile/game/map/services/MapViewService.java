package org.terrehostile.game.map.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.terrehostile.business.Constants;
import org.terrehostile.business.map.MapView;
import org.terrehostile.business.map.Tile;
import org.terrehostile.business.mapTileItem.Building;
import org.terrehostile.business.mapTileItem.Resource;
import org.terrehostile.business.mapTileItem.Troop;
import org.terrehostile.repository.BuildingRepository;
import org.terrehostile.repository.ResourceRepository;
import org.terrehostile.repository.TileRepository;
import org.terrehostile.repository.TroopRepository;

@Service("mapViewService")
public class MapViewService {

	@Autowired
	private TileRepository tileRepository;
	@Autowired
	private ResourceRepository resourceRepository;
	@Autowired
	private BuildingRepository buildingRepository;
	@Autowired
	private TroopRepository troopRepository;

	public void save(Tile tile) {
		tileRepository.save(tile);
	}

	public void save(List<Tile> tiles) {
		for (Tile tile : tiles) {
			System.out.println(tile.toString());
			System.out.println("*******");
		}
		tileRepository.saveAll(tiles);
	}

	public void save(MapView mapView) {
		save(mapView.toTileList());
	}

	public MapView getMapByXYAndSize(int x, int y, int xSize, int ySize) {

		List<Tile> mapTileList = new ArrayList<>();
		List<Building> buildingList = new ArrayList<>();
		List<Resource> resourceTileList = new ArrayList<>();
		List<Troop> troopTileList = new ArrayList<>();

		x = (x < 0) ? x + Constants.XMAX : x;
		y = (y < 0) ? y + Constants.YMAX : y;
		x = (x > Constants.XMAX) ? x - Constants.XMAX : x;
		y = (y > Constants.YMAX) ? y - Constants.YMAX : y;

		int xMin = x;
		int yMin = y;
		int xMax = x + xSize - 1;
		int yMax = y + ySize - 1;

		int xMin1, xMax1, yMin1, yMax1;
		int xMin2, xMax2, yMin2, yMax2;

		boolean xOut = false;
		boolean yOut = false;

		// Classic case
		if (!((xMin < 0 || xMax > Constants.XMAX || yMin < 0 || yMax > Constants.YMAX))) {
			return new MapView(x, y, xSize, ySize, tileRepository.findByXYMinMax(xMin, xMax, yMin, yMax),
					resourceRepository.findByXYMinMax(xMin, xMax, yMin, yMax),
					buildingRepository.findByXYMinMax(xMin, xMax, yMin, yMax),
					troopRepository.findByXYMinMax(xMin, xMax, yMin, yMax));
		}

		// Case where we're outbounds
		else {
			if (xMin < 0) {
				xMin1 = xMin + Constants.XCOUNT;
				xMax1 = Constants.XMAX;
				xMin2 = 0;
				xMax2 = xMax;
				xOut = true;
			}

			else if (xMax > Constants.XMAX) {
				xMin1 = xMin;
				xMax1 = Constants.XMAX;
				xMin2 = 0;
				xMax2 = xMax - Constants.XCOUNT;
				xOut = true;
			}

			else {
				xMin1 = xMin;
				xMax1 = xMax;
				xMin2 = xMin;
				xMax2 = xMax;
			}

			if (yMin < 0) {
				yMin1 = yMin + Constants.YCOUNT;
				yMax1 = Constants.YMAX;
				yMin2 = 0;
				yMax2 = yMax;
				yOut = true;
			}

			else if (yMax > Constants.YMAX) {
				yMin1 = yMin;
				yMax1 = Constants.YMAX;
				yMin2 = 0;
				yMax2 = yMax - Constants.YCOUNT;
				yOut = true;
			} else {
				yMin1 = yMin;
				yMax1 = yMax;
				yMin2 = yMin;
				yMax2 = yMax;
			}

			if (xOut && yOut) {
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin1, xMax1, yMin1, yMax1));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin2, xMax2, yMin1, yMax1));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin1, xMax1, yMin2, yMax2));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin2, xMax2, yMin2, yMax2));

				buildingList.addAll(buildingRepository.findByXYMinMax(xMin1, xMax1, yMin1, yMax1));
				buildingList.addAll(buildingRepository.findByXYMinMax(xMin2, xMax2, yMin1, yMax1));
				buildingList.addAll(buildingRepository.findByXYMinMax(xMin1, xMax1, yMin2, yMax2));
				buildingList.addAll(buildingRepository.findByXYMinMax(xMin2, xMax2, yMin2, yMax2));

				troopTileList.addAll(troopRepository.findByXYMinMax(xMin1, xMax1, yMin1, yMax1));
				troopTileList.addAll(troopRepository.findByXYMinMax(xMin2, xMax2, yMin1, yMax1));
				troopTileList.addAll(troopRepository.findByXYMinMax(xMin1, xMax1, yMin2, yMax2));
				troopTileList.addAll(troopRepository.findByXYMinMax(xMin2, xMax2, yMin2, yMax2));

				resourceTileList.addAll(resourceRepository.findByXYMinMax(xMin1, xMax1, yMin1, yMax1));
				resourceTileList.addAll(resourceRepository.findByXYMinMax(xMin2, xMax2, yMin1, yMax1));
				resourceTileList.addAll(resourceRepository.findByXYMinMax(xMin1, xMax1, yMin2, yMax2));
				resourceTileList.addAll(resourceRepository.findByXYMinMax(xMin2, xMax2, yMin2, yMax2));

			} else if (xOut) {
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin1, xMax1, yMin, yMax));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin2, xMax2, yMin, yMax));

				buildingList.addAll(buildingRepository.findByXYMinMax(xMin1, xMax1, yMin, yMax));
				buildingList.addAll(buildingRepository.findByXYMinMax(xMin2, xMax2, yMin, yMax));

				troopTileList.addAll(troopRepository.findByXYMinMax(xMin1, xMax1, yMin, yMax));
				troopTileList.addAll(troopRepository.findByXYMinMax(xMin2, xMax2, yMin, yMax));

				resourceTileList.addAll(resourceRepository.findByXYMinMax(xMin1, xMax1, yMin, yMax));
				resourceTileList.addAll(resourceRepository.findByXYMinMax(xMin2, xMax2, yMin, yMax));

			} else if (yOut) {
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin, xMax, yMin1, yMax1));
				mapTileList.addAll(tileRepository.findByXYMinMax(xMin, xMax, yMin2, yMax2));

				buildingList.addAll(buildingRepository.findByXYMinMax(xMin, xMax, yMin1, yMax1));
				buildingList.addAll(buildingRepository.findByXYMinMax(xMin, xMax, yMin2, yMax2));

				troopTileList.addAll(troopRepository.findByXYMinMax(xMin, xMax, yMin1, yMax1));
				troopTileList.addAll(troopRepository.findByXYMinMax(xMin, xMax, yMin2, yMax2));

				resourceTileList.addAll(resourceRepository.findByXYMinMax(xMin, xMax, yMin1, yMax1));
				resourceTileList.addAll(resourceRepository.findByXYMinMax(xMin, xMax, yMin2, yMax2));
			}

			return new MapView(x, y, xSize, ySize, mapTileList, resourceTileList, buildingList, troopTileList);
		}

	}

}