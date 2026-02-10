$.ajax({
    url: "com.html",
    success: function (data) {
        $('body').append(data)
    }
})

$(document).ready(function () {
    hs() //header start
    sh() //short header
    hc() //header color
    $(document).scroll(function () {
        hs()
        sh()
        hc()
    })
    $(document).on('mouseenter', 'header', function () {
        $(this).addClass('active')
    })

    $(document).on('mouseleave', 'header', function () {
        var sc = $(window).scrollTop()
        if (sc >= 100) {
            $(this).removeClass('active')
        }
    })
})

function hs() {
    var sc = $(window).scrollTop()
    if (sc < 100) {
        $('header').addClass('active')
    }
}
function sh() {
    var sc = $(window).scrollTop()
    if (sc >= 100) {
        $('header').removeClass('active')
    }
}
function hc() {
    var sc = $(window).scrollTop()
    if (sc > 200) {
        $('header').css({ backgroundColor: 'rgba(0,0,0,0.5' })
    } else {
        $('header').css({ backgroundColor: 'transparent' })
    }
}