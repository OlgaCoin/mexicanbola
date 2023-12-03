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
		$('html').animate({ scrollTop: 0 }, 800);
	});

	$(".burger").click(function () {
		$(this).toggleClass("active");
		$(".menu-mob").toggleClass("move");
	});

	//slick-slider

	$('.hit__slider').slick({
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.h-prev'),
		nextArrow: $('.h-next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
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

	$('.new__slider').slick({
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.n-prev'),
		nextArrow: $('.n-next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
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

	$('.sale__slider').slick({
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.s-prev'),
		nextArrow: $('.s-next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
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

	$('.recent__slider').slick({
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.r-prev'),
		nextArrow: $('.r-next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
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

	$('.package__slider').slick({
		speed: 800,
		slidesToShow: 4,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.p-prev'),
		nextArrow: $('.p-next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
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

	$('.feedback__slider').slick({
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 1,
		// autoplay: true,
		prevArrow: $('.f-prev'),
		nextArrow: $('.f-next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
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

	// catalog sorting
	$('.filter__form').change(function () {
		$("#width_tmp_option").html($('.filter__form option:selected').text());
		$(this).width($("#width_tmp_select").width());
	});

	// product counter
	function inputNumber(e) {

		var el = e;
		el.each(function () {
			el = $(this);

			var min = el.attr('min') || false;
			var max = el.attr('max') || false;

			var els = {};

			els.dec = el.parents(".count").find(".minus");
			els.inc = el.parents(".count").find(".plus");

			el.each(function () {
				init($(this));
			});

			function init(el) {

				els.dec.on('click', decrement);
				els.inc.on('click', increment);

				function decrement() {
					var value = el[0].value;
					value--;
					if (!min || value >= min) {
						el[0].value = value;
					}
				}

				function increment() {
					var value = el[0].value;
					value++;
					if (!max || value <= max) {
						el[0].value = value++;
					}
				}
			}
		})
	}
	inputNumber($('.count__input'));

	// tabs
	const tabItems = document.querySelectorAll('.tabs__item');
	const tabContentItems = document.querySelectorAll('.tabs-content__item');

	function selectItem(e) {
		removeBorder();
		removeShow();
		this.classList.add('tab--border');
		const tabContentItem = document.querySelector(`#${this.id}-content`);
		tabContentItem.classList.add('show');
	}

	function removeBorder() {
		tabItems.forEach(item => {
			item.classList.remove('tab--border');
		});
	}

	function removeShow() {
		tabContentItems.forEach(item => {
			item.classList.remove('show');
		});
	}

	tabItems.forEach(item => {
		item.addEventListener('click', selectItem);
	});

	// Modals
	if (typeof HystModal !== "undefined") {
		var xMod = new HystModal({
			linkAttributeName: 'data-hystmodal',
			catchFocus: true,
			backscroll: false,
			afterClose: function (modal) {
				// 	If Youtube video inside Modal, close it on modal closing:

				// 	let videoframe = modal.openedWindow.querySelector('iframe');
				// 	if (videoframe) {
				// 		videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
				// 	}
			}
		});
	}

	function stopVideoHandler(evt) {
		var link = evt.target;
		var video = link.parentNode.querySelector("video");
		video.pause();
	}
	function addCloseHandler(closeLink) {
		closeLink.addEventListener("click", stopVideoHandler);
	}
	var closeLinks = document.querySelectorAll(".hystmodal, .hystmodal__close, .hystmodal__wrap");
	closeLinks.forEach(addCloseHandler);

});



