let animalsArray = []

$(document).ready(function() {
    getImages();
});

function getImages() {
    $.ajax({
        type: 'GET',
        url: '/api/lista'
    }).then((response) => {
        animalsArray = response;
        console.log(animalsArray);
        getFreewall();
    });
}

function getFreewall() {
    for (let [index, img] of animalsArray.entries()) {
        $('#freewall').append(`<div class="brick">
			<img class="img" data-index="${index}" src="${img.url}" class="imagem">
		</div>`);
    }

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

    wall.container.find('.brick img').on('load', function() {
        wall.fitWidth();
    });
}

$(document).ready(function() {
	$(document).on('click','.img',function() {
		var index = $(this).attr('data-index');
		console.log(index);
		$('#animalName').text(animalsArray[index].animal)
		$('#curiosity').text(animalsArray[index].curiosidade)
		$('#animalModal').modal('show')
	});
});



