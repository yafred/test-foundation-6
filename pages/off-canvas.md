---
layout: default
permalink: /off-canvas
---
<!-- Leaflet -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.2/dist/leaflet.css" />
<script src="//unpkg.com/leaflet@1.0.2/dist/leaflet.js"></script>


<style>
#mapView {
	bottom: 0;
	left: 0;
	position: fixed;
	right: 0;
	top: 0px;
	z-index: 1;
}
#map {
	height: 100%;
	overflow: hidden;
}	
#openMenuButton {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 10px;
    margin-left: 10px;
    z-index: 1000;
    opacity: .7;
}
</style>


<div class="off-canvas position-left" id="offCanvasLeft" data-off-canvas>

  <!-- Close button -->
  <button class="close-button" aria-label="Close menu" type="button" data-close>
    <span aria-hidden="true">&times;</span>
  </button>

  <!-- Menu -->
  <ul class="vertical menu">
    <li><a href="#">Foundation</a></li>
    <li><a href="#">Dot</a></li>
    <li><a href="#">ZURB</a></li>
    <li><a href="#">Com</a></li>
    <li><a href="#">Slash</a></li>
    <li><a href="#">Sites</a></li>
  </ul>
</div>

<div id="mapView" class="off-canvas-content" data-off-canvas-content>
  <button id="openMenuButton" type="button" class="button" data-toggle="offCanvasLeft">Open Menu</button>
  <div id="map"></div>
</div>

<script>
	// Create map
	var map = new L.Map('map', { 
		zoomControl: false
        });
	L.control.zoom({ position: 'topright'}).addTo(map);
	L.control.scale().addTo(map);
		
	// create the tile layer with correct attribution
	L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	
	map.setView(new L.LatLng(46.566414, 2.4609375), 6);
</script>

