package org.terrehostile.game.configuration.model;

import java.util.ArrayList;
import java.util.Arrays;
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
@PropertySource("classpath:/gameConfiguration/grounds.properties")
@ConfigurationProperties(prefix = "grounds")
public class GroundConfigurationPropertyList {

	@Bean(name = "groundConfigurations")
	public List<GroundConfiguration> groundConfigurations() {
		return getGroundConfigurations();
	}

	@Autowired
	@JsonIgnore
	private Environment env;

	private List<String> names = new ArrayList<String>();

	private List<String> imgPaths = new ArrayList<String>();

	private List<Integer> types = new ArrayList<Integer>();

	private List<GroundConfiguration> getGroundConfigurations() {

		List<GroundConfiguration> res = new ArrayList<>();

		for (int groundType : types) {
			GroundConfiguration currentGroundCfg = new GroundConfiguration();
			currentGroundCfg.setName(env.getProperty("grounds.names[" + groundType + "]"));

			String imgPath = env.getProperty("grounds.imgPaths[" + groundType + "]");
			currentGroundCfg.setImgPath(Arrays.asList(imgPath.split(",")));

			currentGroundCfg.setType(Integer.parseInt(env.getProperty("grounds.types[" + groundType + "]")));

			currentGroundCfg.setMovement(Integer.parseInt(env.getProperty("grounds.movement[" + groundType + "]")));

			res.add(currentGroundCfg);

		}

		return res;
	}

}
