mapboxgl.accessToken = 'pk.eyJ1Ijoib3V5YW5naiIsImEiOiJjamM5ZmFnMXIwYXV5Mndxb3BmbnZ4bTM5In0.6ld1f_D91R9g82tWqmg3MQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/ouyangj/cjc9ozhpr11jn2sn8ww7ipt3d',
    zoom: 16,
    center: [-122.388405, 37.788029]
});

var nav = new mapboxgl.NavigationControl();
	map.addControl(nav, 'top-left');

var url = "http://10.2.252.70:4000/alerts/CA-ILEG0";
map.on('load', function () {
	window.setInterval(function() {
        map.getSource('hits').setData(url);
    }, 2000);

    map.addSource('hits', { type: 'geojson', data: url});
    map.addLayer({
        "id": "hits",
        "type": "circle",
        "source": "hits",
        'paint': {
            "circle-color" : "#ff0000",
            "circle-stroke-color" : "#c41300",
            "circle-stroke-width" : 2,
            'circle-radius': {
			  "base": 1,
			  "stops": [[7, 1], [22, 9]]
			}, 
			"circle-opacity": 0.5,
			"circle-stroke-opacity": 0.7
        }
    });
});