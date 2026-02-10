$.ajax({
    url: "com.html",
    success: function (data) {
        $('body').append(data)
    }
})

$(document).on('mouseleave', 'header .menu-li', function () {
    $(this).find('.sub').stop().fadeOut()
    $('header').removeClass('white')
})
$(document).on('mouseenter', 'header .menu-li', function () {
    $(this).find('.sub').stop().fadeIn()
    $('header').addClass('white')
})

header_white()
top_btn()

$(window).scroll(function () {
    header_white()
    top_btn()
})

function header_white() {
    sc_top = $(window).scrollTop()
    if (sc_top > 30) {
        $('header').addClass('white')
    } else {
        $('header').removeClass('white')
    }
}

function top_btn() {
    sc_top = $(window).scrollTop()
    if (sc_top > 500) {
        $('.top-btn').addClass('see')
    } else {
        $('.top-btn').removeClass('see')
    }
}

sc_first = $(window).scrollTop()
$(window).scroll(function () {
    sc_now = $(window).scrollTop()
    console.log('now:', sc_now)
    if (sc_first < sc_now) {
        $('header').css({ top: '-80px' })
    } else {
        $('header').css({ top: '0' })
    }
    sc_first = sc_now
})