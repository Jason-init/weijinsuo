/*
 * @Author: QiZhang
 * @Date:   2020-05-01 20:21:11
 * @Last Modified by:   QiZhang
 * @Last Modified time: 2020-05-04 22:14:07
 */
$(function() {
	function resize() {
 		var windowWidth = $(window).width()
 		$('#main_ad > .carousel-inner > .item').each(function(idex, item) {
 			var imgSrc = windowWidth < 768 ? $(item).data('image-xs') : $(item).data('image-lg')
 			$(item).css('backgroundImage', 'url("' + imgSrc + '")')
 		})
 	}
 	$(window).on('resize', resize).trigger('resize')
})