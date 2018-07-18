package org.terrehostile.web.admincontrolers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.terrehostile.business.map.Map;

@Controller
public class MapEditorControler {
	
	@RequestMapping(value={"/admin/mapEditor"}, method = RequestMethod.GET)
	public ModelAndView login(){
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("admin/homeMapEditor");
		return modelAndView;
	}
	
	
	@RequestMapping(value={"/admin/createMap"}, method = RequestMethod.GET)
	public ModelAndView createMap(){
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("mapStr", Map.createMapStr());
		modelAndView.addObject("mapBck", Map.createMapBack());
		modelAndView.addObject("user", Map.createUser());
		modelAndView.setViewName("admin/homeMapEditor");
		return modelAndView;
	}
	
}