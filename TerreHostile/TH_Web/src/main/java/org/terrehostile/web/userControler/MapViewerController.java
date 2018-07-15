package org.terrehostile.web.userControler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MapViewerController {
	
	@RequestMapping(value={"/user/mapViewer"}, method = RequestMethod.GET)
	public ModelAndView login(){
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("user/mapViewer/homeMapViewer");
		return modelAndView;
	}
}