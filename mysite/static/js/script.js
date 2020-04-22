//! NAVBAR ACHTERGRONDKLEUR NA SCROLLEN
$(document).ready(function () {
	$(window).scroll(function () {
		if ($(document).scrollTop() > 300) {
			$('.navbar-fixed-top').css('background-color', '#ee7c05');
		} else {
			$('.navbar-fixed-top').css('background-color', 'transparent');
		}
	});
});

//! NIEUWS CAROUSEL
$(document).ready(function () {
	$('.nieuws-carousel').slick({
		centerMode: true,
		centerPadding: '360px',
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1,
				},
			},
		],
	});
});

//! MAP
var mymap = L.map('mapid', {
	scrollWheelZoom: false,
}).setView([51.9831, 5.9275], 12);

L.tileLayer(
	'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
	{
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
	}
).addTo(mymap);

// DIV ICON
var myIcon = L.divIcon({ className: 'my-div-icon' });
L.marker([51.964029, 5.915451], {
	html: '<p>1</p>',
	icon: myIcon,
}).addTo(mymap);

// MALBURGEN (2)
L.circle([51.964029, 5.915451], 300, {
	color: 'rgb(255, 145, 0)',
	fillColor: 'rgb(255, 145, 0)',
	fillOpacity: 1,
})
	.addTo(mymap)

// OOSTERBEEK (1)
L.circle([51.987868, 5.853138], 300, {
	color: '#3eb6b7',
	fillColor: '#3eb6b7',
	fillOpacity: 1,
})
	.addTo(mymap)

// HOOGKAMP (2)
L.circle([51.995178, 5.895195], 300, {
	color: 'rgb(255, 145, 0)',
	fillColor: 'rgb(255, 145, 0)',
	fillOpacity: 1,
})
	.addTo(mymap)

// PRESIKHAAF (6)
L.circle([51.989817, 5.948238], 300, {
	color: 'rgb(255, 145, 0)',
	fillColor: 'rgb(255, 145, 0)',
	fillOpacity: 1,
})
	.addTo(mymap)

// VLOT (11)
L.circle([51.960389, 5.841122], 300, {
	color: 'rgb(255, 145, 0)',
	fillColor: 'rgb(255, 145, 0)',
	fillOpacity: 1,
})
	.addTo(mymap)

// DE LAAR (3)
L.circle([51.945159, 5.873737], 300, {
	color: 'rgb(255, 145, 0)',
	fillColor: 'rgb(255, 145, 0)',
	fillOpacity: 1,
})
	.addTo(mymap)

// HUISSEN (5)
L.circle([51.939266, 5.930214], 300, {
	color: 'rgb(255, 145, 0)',
	fillColor: 'rgb(255, 145, 0)',
	fillOpacity: 1,
})
	.addTo(mymap)

// VELP (7)
L.circle([51.991067, 5.977249], 300, {
	color: 'rgb(255, 145, 0)',
	fillColor: 'rgb(255, 145, 0)',
	fillOpacity: 1,
})
	.addTo(mymap)

// WESTERVOORT (8)
L.circle([51.962954, 5.971069], 300, {
	color: 'rgb(255, 145, 0)',
	fillColor: 'rgb(255, 145, 0)',
	fillOpacity: 1,
})
	.addTo(mymap)

// WESTERVOORT (1)
L.circle([51.953015, 5.969009], 300, {
	color: '#3eb6b7',
	fillColor: '#3eb6b7',
	fillOpacity: 1,
})
	.addTo(mymap)

// DUIVEN (9)
L.circle([51.94942, 6.021194], 300, {
	color: 'rgb(255, 145, 0)',
	fillColor: 'rgb(255, 145, 0)',
	fillOpacity: 1,
})
	.addTo(mymap)

	// ZWEEK (4)
L.circle([51.962531, 6.0672], 300, {
	color: '#3eb6b7',
	fillColor: '#3eb6b7',
	fillOpacity: 1,
})
	.addTo(mymap)

var popup = L.popup();

mymap.on('click', onMapClick);

//! EIGENAAR PAGINA CONTENT WISSEL
const aanDeSlag = document.getElementById('aan-de-slag');
const financieel = document.getElementById('financieel');
const eigenaarContent = document.querySelector('.content-links');
const eigenaarTitel = document.getElementById('eigenaar-titel');
const eigenaarInhoud = document.getElementById('eigenaar-content');

aanDeSlag.addEventListener('click', () => {
	eigenaarTitel.innerHTML = '<h1>Aan de slag met de geit!</h1>';
});
