const { Freewall } = require("freewall");
const imagesArray = []

getImages();

function getImages() {
	$.ajax({
		type: 'GET',
		url: '/api/lista'
	}).then((response) => {
		this.imagesArray = response
	});
}

function getFreewall(){
	var wall = new Freewall("#freewall");
		wall.reset({
			selector: '.brick',
			animate: true,
			cellW: 200,
			cellH: 'auto',
			onResize: function() {
				wall.fitWidth();
			}
		});

		wall.container.find('.brick img').load(function() {
			wall.fitWidth();
		});

		for (let img of imagesArray){  
			$('#foo').append('<div id="first'+img+'">text</div>');
		}
}


