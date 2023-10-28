$(document).ready(function () {

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 70) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		};
	});

	//slick-slider

	$('.sslider').slick({
		speed: 1200,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

});



