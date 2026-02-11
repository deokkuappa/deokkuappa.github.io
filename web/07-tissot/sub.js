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

function startGuide(el) {
    const video = document.getElementById('guideVideo')
    video.play()
}
window.addEventListener('load', function () {
    const video = document.getElementById('guideVideo')
    const textBox = document.querySelector('.right .txt-box')
    const clickArea = document.querySelector('.video-click-area')

    clickArea.onclick = function () {
        if (video.paused) {
            video.play()
        } else {
            video.pause()
        }
    }

    video.onplay = function () {
        textBox.classList.add('hide')
        video.controls = true
    }
    video.onpause = function () {
        textBox.classList.remove('hide')
    }
    video.onended = function () {
        textBox.classList.remove('hide')
        video.controls = false
    }
})