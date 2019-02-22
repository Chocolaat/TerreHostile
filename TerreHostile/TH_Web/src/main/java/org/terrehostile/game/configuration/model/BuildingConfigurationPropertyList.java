package org.terrehostile.game.configuration.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Configuration
@PropertySource("classpath:/gameConfiguration/buildings.properties")
@ConfigurationProperties(prefix = "buildings")
public class BuildingConfigurationPropertyList {

	@Bean(name = "buildingConfigurations")
	public Map<Integer, BuildingConfiguration> buildingConfigurations() {
		return getBuildingConfigurations();
	}

	@Autowired
	@JsonIgnore
	private Environment env;

	private List<String> names = new ArrayList<String>();

	private List<String> imgPaths = new ArrayList<String>();

	private List<Integer> types = new ArrayList<Integer>();

	public List<String> getNames() {
		return names;
	}

	public void setNames(List<String> names) {
		this.names = names;
	}

	public List<String> getImgPaths() {
		return imgPaths;
	}

	public void setImgPaths(List<String> imgPaths) {
		this.imgPaths = imgPaths;
	}

	public List<Integer> getTypes() {
		return types;
	}

	public void setTypes(List<Integer> types) {
		this.types = types;
	}

	private Map<Integer, BuildingConfiguration> getBuildingConfigurations() {

		HashMap<Integer, BuildingConfiguration> res = new HashMap<>();

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

			res.put(buildingType, currentBuildingCfg);

		}

		return res;
	}

	@Override
	public String toString() {
		return "UnitsConfiguration [env=" + env + ", names=" + names + ", imgPaths=" + imgPaths + ", types=" + types
				+ "]";
	}

}
