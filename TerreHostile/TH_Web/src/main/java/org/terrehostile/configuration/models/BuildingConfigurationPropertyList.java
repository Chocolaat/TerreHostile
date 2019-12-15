package org.terrehostile.configuration.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

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

			res.add(currentBuildingCfg);

		}

		return res;
	}

}
