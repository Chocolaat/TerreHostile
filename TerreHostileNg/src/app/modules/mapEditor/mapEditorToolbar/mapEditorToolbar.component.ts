import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-editor-toolbar',
  template: `
  <section id="mapEditorToolbar" th:fragment="mapEditorToolbar">
		<div id="mapToolBar">
			<button type="button" class="mapToolBarItem"
				id="mapToolBarItemGroundType">Type de terrain</button>
			<button type="button" class="mapToolBarItem"
				id="mapToolBarItemBuildings">Bâtiments</button>
			<button type="button" class="mapToolBarItem"
				id="mapToolBarItemTroops">Troupes</button>
			<button type="button" class="mapToolBarItem"
				id="mapToolBarItemResources">Ressources</button>
		</div>

		<div id="mapToolBarSubMenu"></div>

		<script id="mapToolBarSubMenuItemButtonTemplate" type="text/template">
  <button type='button' class='mapToolBarSubMenuItem' id='mapToolBarSubMenuItem_{{name}}'
  style='--backgroundImageUrl:url({{imgPath}});'>
  {{name}}</button>
	</script>


		<div id="mapToolBarSubMenu_Buildings" style='display: none'>
			<button type="button" class="mapToolBarSubMenuItem"
				id="mapToolBarSubMenuItem_Castle">Château</button>
		</div>

		<div id="mapToolBarSubMenu_Troops" style='display: none'>
			<button type="button" class="mapToolBarSubMenuItem"
				id="mapToolBarSubMenuItem_Dragon">Dragon</button>
			<button type="button" class="mapToolBarSubMenuItem"
				id="mapToolBarSubMenuItem_Unicorn">Licorne</button>
		</div>

		<div id="mapToolBarSubMenu_Resources" style='display: none'>
			<button type="button" class="mapToolBarSubMenuItem"
				id="mapToolBarSubMenuItem_Flours">Fleurs</button>
		</div>
	</section>
  `,
  styleUrls: ['./mapEditorToolbar.component.css']
})
export class MapEditorToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
