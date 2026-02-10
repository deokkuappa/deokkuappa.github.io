$.ajax({
    url: "com.html",
    success: function (data) {
        $('body').append(data)
    }
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

$(function() {
    $('.tax-btn').click(function(){
        $('.tax-list').stop().slideToggle();
        $('.tax-btn .fa-chevron-up, .tax-btn .fa-chevron-down').toggle();
    });

    $('.fam-btn').click(function(){
        $('.fam-list').stop().slideToggle();
        $('.fam-btn .fa-chevron-up, .fam-btn .fa-chevron-down').toggle();
    });
});