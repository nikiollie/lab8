function initMap() {
	// add your code here
	L.mapquest.key = 'pX1xGCyJCOSTax3Ah3FGIWkaPj2xX2AZ';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.87850361694441, -117.23587945682593],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
	});

	L.marker([32.87850361694441, -117.23587945682593]).addTo(map);
}