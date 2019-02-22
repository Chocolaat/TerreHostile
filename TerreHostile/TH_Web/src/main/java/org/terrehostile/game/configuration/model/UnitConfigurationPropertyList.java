package org.terrehostile.game.configuration;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Configuration
@PropertySource("classpath:/gameConfiguration/units.properties")
@ConfigurationProperties(prefix = "units")
public class UnitConfigurationPropertyList {

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

	@JsonIgnore
	public UnitConfiguration getUnitConfiguration(int unitType) {
		UnitConfiguration res = new UnitConfiguration();
		res.setName(env.getProperty("units.names[" + unitType + "]"));
		res.setImgPath(env.getProperty("units.imgPaths[" + unitType + "]"));
		res.setType(Integer.parseInt(env.getProperty("units.types[" + unitType + "]")));

		res.setVision(Integer.parseInt(env.getProperty("units.vision[" + unitType + "]")));
		res.setMovement(Integer.parseInt(env.getProperty("units.movement[" + unitType + "]")));

		res.setTotalHealth(Integer.parseInt(env.getProperty("units.totalHealth[" + unitType + "]")));
		res.setPower(Integer.parseInt(env.getProperty("units.power[" + unitType + "]")));
		res.setArmor(Integer.parseInt(env.getProperty("units.armor[" + unitType + "]")));
		res.setRange(Integer.parseInt(env.getProperty("units.range[" + unitType + "]")));

		return res;
	}

	@JsonIgnore
	public Map<Integer, UnitConfiguration> getUnitConfigurations() {

		HashMap<Integer, UnitConfiguration> res = new HashMap<>();

		for (int unitType : types) {
			UnitConfiguration currentUnitCfg = new UnitConfiguration();
			currentUnitCfg.setName(env.getProperty("units.names[" + unitType + "]"));
			currentUnitCfg.setImgPath(env.getProperty("units.imgPaths[" + unitType + "]"));
			currentUnitCfg.setType(Integer.parseInt(env.getProperty("units.types[" + unitType + "]")));

			currentUnitCfg.setVision(Integer.parseInt(env.getProperty("units.vision[" + unitType + "]")));
			currentUnitCfg.setMovement(Integer.parseInt(env.getProperty("units.movement[" + unitType + "]")));

			currentUnitCfg.setTotalHealth(Integer.parseInt(env.getProperty("units.totalHealth[" + unitType + "]")));
			currentUnitCfg.setPower(Integer.parseInt(env.getProperty("units.power[" + unitType + "]")));
			currentUnitCfg.setArmor(Integer.parseInt(env.getProperty("units.armor[" + unitType + "]")));
			currentUnitCfg.setRange(Integer.parseInt(env.getProperty("units.range[" + unitType + "]")));

			res.put(unitType, currentUnitCfg);

		}

		return res;
	}

	@JsonIgnore
	public UnitConfigurationPropertyList getUnitConfigurationPropertyList() {
		UnitConfigurationPropertyList res = new UnitConfigurationPropertyList();
		res.setImgPaths(imgPaths);
		res.setNames(names);
		res.setTypes(types);
		return res;
	}

	@Override
	public String toString() {
		return "UnitsConfiguration [env=" + env + ", names=" + names + ", imgPaths=" + imgPaths + ", types=" + types
				+ "]";
	}

}
