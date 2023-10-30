$(document).ready(function () {

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 70) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		};

		if (scroll >= 3000) {
			$('.toTop').addClass('show');
		} else {
			$('.toTop').removeClass('show');
		}
	});

	$('.toTop').click(function () {
		$('html').animate({ scrollTop: 0 }, 2000);
	});

	//slick-slider

	$('.hit__slider').slick({
		speed: 1200,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.h-prev'),
		nextArrow: $('.h-next'),
	});

	$('.new__slider').slick({
		speed: 1200,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.n-prev'),
		nextArrow: $('.n-next'),
	});

	$('.package__slider').slick({
		speed: 1200,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.p-prev'),
		nextArrow: $('.p-next'),
	});

	$('.feedback__slider').slick({
		speed: 1200,
		slidesToShow: 3,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.f-prev'),
		nextArrow: $('.f-next'),
	});

	// $('.sslider').slick({
	// 	responsive: [
	// 		{
	// 			breakpoint: 992,
	// 			settings: {
	// 				slidesToShow: 3,
	// 				slidesToScroll: 3
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 576,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 2
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1
	// 			}
	// 		}
	// 	]
	// });


});



