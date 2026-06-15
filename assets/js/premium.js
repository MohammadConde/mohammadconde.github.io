/*
	Premium enhancements — scroll reveals & header behavior
*/

(function($) {

	var $window = $(window);

	// Scroll-reveal via Intersection Observer
	function initReveal() {

		if (!('IntersectionObserver' in window))
			return;

		var observer = new IntersectionObserver(function(entries) {
			entries.forEach(function(entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.15,
			rootMargin: '0px 0px -40px 0px'
		});

		document.querySelectorAll(
			'.timeline, .timeline-item, .vision-pillars, .reveal, #footer-premium, .wrapper > .inner'
		).forEach(function(el) {
			observer.observe(el);
		});

	}

	// Sticky header background on scroll
	function initHeader() {

		var $header = $('.site-header');

		if (!$header.length)
			return;

		$window.on('scroll.header', function() {
			$header.toggleClass('is-scrolled', $window.scrollTop() > 60);
		}).triggerHandler('scroll.header');

	}

	$(function() {
		initReveal();
		initHeader();
	});

})(jQuery);
