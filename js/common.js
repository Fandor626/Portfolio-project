jQuery(document).ready(function () {

   
    jQuery('.item-masonry').hover(
		function(){
			$(this).find(".cover-item-gallery").fadeIn();
		},
		function(){
			$(this).find(".cover-item-gallery").fadeOut();
		}
    );

    var sizer = '.grid-sizer';

    var container = $('#gallery');

    container.imagesLoaded(function(){
    	container.masonry({
    		itemSelector: '.item-masonry',
    		columnWidth: sizer,
    		percentPosition: true
    	});
    });


    jQuery(".owl-carousel").owlCarousel({
        dots: false,
        loop: true,
        margin: 10,
        navText: false,
        responsiveClass: true,
        autoplay: true,
        autoplaySpeed: 400,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: true
            },
            1024: {
                items: 4,
                nav: true,
            }
        }
    });
    jQuery('.slider').slick({
        arrows: false
    });
    var $container = $(".masonry-container");
    $container.imagesLoaded(function () {
        $container.masonry({
            columnWidth: ".grid-sizer",
            itemSelector: ".item"
        });
    }); 
});