window.HELP_IMPROVE_VIDEOJS = false;

function downloadJSON(fileName) {
  const a = document.createElement('a');
  a.href = `./static/point_clouds/${fileName}`;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

$(document).ready(function() {
    
    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    bulmaSlider.attach();
    const menuItems = document.querySelectorAll('.menu-avatars-item') ?? [];
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const fileName = item.getAttribute('data-file');
            downloadJSON(fileName);
        });
    });
})
