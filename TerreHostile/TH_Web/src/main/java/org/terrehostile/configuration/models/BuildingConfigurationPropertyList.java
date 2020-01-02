package org.terrehostile.configuration.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.terrehostile.player.models.Stock;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Configuration
@PropertySource("classpath:/gameConfiguration/buildings.properties")
@ConfigurationProperties(prefix = "buildings")
public class BuildingConfigurationPropertyList {

	@Bean(name = "buildingConfigurations")
	public List<BuildingConfiguration> buildingConfigurations() {
		return getBuildingConfigurations();
	}

	@Autowired
	@JsonIgnore
	private Environment env;

	private List<String> names = new ArrayList<String>();

	private List<String> imgPaths = new ArrayList<String>();

	private List<Integer> types = new ArrayList<Integer>();

	private List<BuildingConfiguration> getBuildingConfigurations() {

		List<BuildingConfiguration> res = new ArrayList<>();

		for (int buildingType : types) {
			BuildingConfiguration currentBuildingCfg = new BuildingConfiguration();
			currentBuildingCfg.setName(env.getProperty("buildings.names[" + buildingType + "]"));
			currentBuildingCfg.setImgPath(env.getProperty("buildings.imgPaths[" + buildingType + "]"));
			currentBuildingCfg.setType(Integer.parseInt(env.getProperty("buildings.types[" + buildingType + "]")));

			currentBuildingCfg.setVision(Integer.parseInt(env.getProperty("buildings.vision[" + buildingType + "]")));

			currentBuildingCfg
					.setTotalHealth(Integer.parseInt(env.getProperty("buildings.totalHealth[" + buildingType + "]")));
			currentBuildingCfg.setPower(Integer.parseInt(env.getProperty("buildings.power[" + buildingType + "]")));
			currentBuildingCfg.setArmor(Integer.parseInt(env.getProperty("buildings.armor[" + buildingType + "]")));
			currentBuildingCfg.setRange(Integer.parseInt(env.getProperty("buildings.range[" + buildingType + "]")));

			currentBuildingCfg = setBuildingCost(currentBuildingCfg, buildingType);

			res.add(currentBuildingCfg);

		}

		return res;
	}

	private BuildingConfiguration setBuildingCost(BuildingConfiguration currentBuildingCfg, int buildingType) {

		Stock stock = new Stock();
		stock.setGold(getCostValue(env.getProperty("buildings.cost[" + buildingType + "].gold")));
		stock.setStone(getCostValue(env.getProperty("buildings.cost[" + buildingType + "].stone")));
		stock.setWood(getCostValue(env.getProperty("buildings.cost[" + buildingType + "].wood")));

		currentBuildingCfg.setCost(stock);

		return currentBuildingCfg;
	}

	private int getCostValue(String number) {
		try {
			return Integer.parseInt(number);
		} catch (NumberFormatException e) {
			return 0;
		}
	}

}
