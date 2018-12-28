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
@PropertySource("classpath:/gameConfiguration/grounds.properties")
@ConfigurationProperties(prefix = "grounds")
public class GroundConfigurationPropertyList {

	@Autowired
	@JsonIgnore
	private Environment env;

	private List<String> names = new ArrayList<String>();

	private List<String> imgPaths = new ArrayList<String>();

	private List<String> imgPathsGround = new ArrayList<String>();

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

	public List<String> getImgPathsGround() {
		return imgPathsGround;
	}

	public void setImgPathsGround(List<String> imgPathsGround) {
		this.imgPathsGround = imgPathsGround;
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
	public GroundConfiguration getGroundConfiguration(int groundType) {
		GroundConfiguration res = new GroundConfiguration();
		res.setName(env.getProperty("grounds.names[" + groundType + "]"));
		res.setImgPath(env.getProperty("grounds.imgPaths[" + groundType + "]"));
		res.setImgPathGround(env.getProperty("grounds.imgPathsGround[" + groundType + "]"));
		res.setType(Integer.parseInt(env.getProperty("grounds.types[" + groundType + "]")));

		res.setMovement(Integer.parseInt(env.getProperty("grounds.movement[" + groundType + "]")));

		return res;
	}

	@JsonIgnore
	public Map<Integer, GroundConfiguration> getGroundConfigurations() {

		HashMap<Integer, GroundConfiguration> res = new HashMap<>();

		for (int groundType : types) {
			GroundConfiguration currentGroundCfg = new GroundConfiguration();
			currentGroundCfg.setName(env.getProperty("grounds.names[" + groundType + "]"));
			currentGroundCfg.setImgPath(env.getProperty("grounds.imgPaths[" + groundType + "]"));
			currentGroundCfg.setImgPathGround(env.getProperty("grounds.imgPathsGround[" + groundType + "]"));
			currentGroundCfg.setType(Integer.parseInt(env.getProperty("grounds.types[" + groundType + "]")));

			currentGroundCfg.setMovement(Integer.parseInt(env.getProperty("grounds.movement[" + groundType + "]")));

			res.put(groundType, currentGroundCfg);

		}

		return res;
	}

	@JsonIgnore
	public GroundConfigurationPropertyList getGroundConfigurationPropertyList() {
		GroundConfigurationPropertyList res = new GroundConfigurationPropertyList();
		res.setImgPaths(imgPaths);
		res.setImgPathsGround(imgPathsGround);
		res.setNames(names);
		res.setTypes(types);
		return res;
	}

	@Override
	public String toString() {
		return "GroundConfigurationPropertyList [env=" + env + ", names=" + names + ", imgPaths=" + imgPaths
				+ ", imgPathsGround=" + imgPathsGround + ", types=" + types + "]";
	}

}
