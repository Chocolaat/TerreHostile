package org.terrehostile.web.admincontrolers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.terrehostile.business.map.Map;

@Controller
public class MapEditorControler {
	
	
	@RequestMapping(value={"/admin/mapEditor"}, method = RequestMethod.GET)
	public ModelAndView mapEditor(){
		ModelAndView modelAndView = new ModelAndView();
		Map m = new Map();
		modelAndView.addObject("map", m);
		modelAndView.setViewName("admin/homeMapEditor");
		return modelAndView;
	}
	
	   @PostMapping("/admin/mapEditor")
	    public ModelAndView greetingSubmit(@ModelAttribute Map map) {
		   	ModelAndView modelAndView = new ModelAndView();
			Map m = Map.createMapRandomBackgrounds(map.getWidth(), map.getHeight());
			modelAndView.addObject("mapJsonView", m.toJsonView());
			modelAndView.setViewName("admin/homeMapEditor");
			return modelAndView;
	    }
	
	
}