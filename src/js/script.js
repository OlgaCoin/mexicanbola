$(document).ready(function () {

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 70) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		};
	});

});



