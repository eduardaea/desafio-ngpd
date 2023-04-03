let animalsArray = []

$(document).ready(function() {
    getImages();
	$(document).on('click','.img',function() {
		var index = $(this).attr('data-index');
		$('#animalName').text(animalsArray[index].animal)
		$('#curiosity').text(animalsArray[index].curiosidade)
		$('#animalModal').modal('show')
	});
});

function getImages() {
    $.ajax({
        type: 'GET',
        url: '/api/lista'
    }).then((response) => {
        animalsArray = response;
		createImages();
        initFreewall();
    });
}

function createImages() {
	for (let [index, img] of animalsArray.entries()) {
        $('#freewall').append(`<div class="brick">
			<img class="img" data-index="${index}" src="${img.url}" class="imagem">
		</div>`);
    }
}

function initFreewall() {
    const wall = new Freewall("#freewall");
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
