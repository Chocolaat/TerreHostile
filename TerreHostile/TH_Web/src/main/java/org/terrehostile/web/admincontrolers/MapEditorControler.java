package org.terrehostile.web.admincontrolers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.terrehostile.business.map.Map;

@Controller
public class MapEditorControler {
	
	
	@RequestMapping(value={"/admin/mapEditor"}, method = RequestMethod.GET)
	public ModelAndView createMap(){
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("map", Map.createMapRandomBackgrounds(10, 10));
		modelAndView.setViewName("admin/homeMapEditor");
		return modelAndView;
	}
	
}