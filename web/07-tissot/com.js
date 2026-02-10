$.ajax({
    url: "com.html",
    success: function (data) {
        $('body').append(data)
    }
})

$('#fullpage').fullpage({
    scrollOverflow: false,
    navigation: true,
    scrollingSpeed: 1000,
    onLeave: function (a, b) {
        if (b.index == 0) {
            $('header').addClass('active')
        } else if (b.index > a.index) {
            $('header').removeClass('active')
        }
    }
})

$(document).ready(function () {
    $(document).on('mouseenter', 'header', function () {
        $(this).addClass('active');
    });
    $(document).on('mouseleave', 'header', function () {
        if (typeof fullpage_api !== 'undefined') {
            if (fullpage_api.getActiveSection().index !== 0) {
                $(this).removeClass('active');
            }
        }
    });
});

