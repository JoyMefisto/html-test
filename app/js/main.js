;(function(window, document, $) {

	$(document).ready( () => {

		let starContainer = $('.stars-js');
// Делегирование
		starContainer.on('click', '.star', function () {
			starContainer.find('.active').removeClass('active');
			$(this).addClass('active');
		});
// Toggle button mobile menu
		$('.sandwich').on('click', function () {
			$(this).toggleClass('active');
		})

	});

})(window, document, jQuery);
