/*
 * @Author: QiZhang
 * @Date:   2020-05-01 20:21:11
 * @Last Modified by:   QiZhang
 * @Last Modified time: 2020-05-09 20:38:23
 */
$(function() {
    function resize() {
        var windowWidth = $(window).width()
        $('#main_ad > .carousel-inner > .item').each(function(idex, item) {
            var imgSrc = windowWidth < 768 ? $(item).data('image-xs') : $(item).data('image-lg')
            $(item).css('backgroundImage', 'url("' + imgSrc + '")')
            if (windowWidth < 768) {
                $(item).html('<img src="' + imgSrc + '" alt="" />')
            } else {
                $(item).empty()
            }
        })
    }
    $(window).on('resize', resize).trigger('resize')

    $('[data-toggle="tooltip"]').tooltip()

    var width = 30
    $('.ul-wrapper > .nav-tabs').children().each(function(i, item) {
        width += $(item).width()
    })
    if ($(window).width() < width) {
        $('.ul-wrapper > .nav-tabs').css('width', width).parent().css('overflow-x', 'scroll')
    }

    $('#news .nav-pills a').on('click', function () {
        var title = $(this).data('title')
        $('#news .news-title').text(title)
    })
})