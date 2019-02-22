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
@PropertySource("classpath:/gameConfiguration/resources.properties")
@ConfigurationProperties(prefix = "resources")
public class ResourceConfigurationPropertyList {

	@Bean(name = "resourceConfigurations")
	public Map<Integer, ResourceConfiguration> resourceConfigurations() {
		return getResourceConfigurations();
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

	private Map<Integer, ResourceConfiguration> getResourceConfigurations() {

		HashMap<Integer, ResourceConfiguration> res = new HashMap<>();

		for (int resourceType : types) {
			ResourceConfiguration currentResourceCfg = new ResourceConfiguration();
			currentResourceCfg.setName(env.getProperty("resources.names[" + resourceType + "]"));
			currentResourceCfg.setImgPath(env.getProperty("resources.imgPaths[" + resourceType + "]"));
			currentResourceCfg.setType(Integer.parseInt(env.getProperty("resources.types[" + resourceType + "]")));

			currentResourceCfg
					.setRegeneration(Integer.parseInt(env.getProperty("resources.regeneration[" + resourceType + "]")));

			res.put(resourceType, currentResourceCfg);

		}

		return res;
	}

	@Override
	public String toString() {
		return "UnitsConfiguration [env=" + env + ", names=" + names + ", imgPaths=" + imgPaths + ", types=" + types
				+ "]";
	}

}
