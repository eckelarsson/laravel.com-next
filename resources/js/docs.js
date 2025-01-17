require('./vendor/prism.js');

$(document).ready(function () {
    $('.navigation_contain').show();
});

var current = $('.docs_sidebar ul').find('li a[href="' + window.location.pathname + '"]');

if (current.length) {
    current.parent().parent().parent().addClass('sub--on');

    current.parent().addClass('active');
}

$(".docs_sidebar h2").click(function (e) {
    e.preventDefault();
    let currenty_active = $(this).parent().hasClass('sub--on');
    $(".navigation_contain ul li").removeClass("sub--on");
    if(!currenty_active) {
        $(this).parent().addClass("sub--on");
    }
});

$('#version_switcher').change(function(e){
    window.location = $('#version_switcher').val();
});

$('.docs_main blockquote p').each(function () {
    var str = $(this).html();
    var match = str.match(/\{(.*?)\}/);
    var img, color;

    if (match) {
        var type = match[1] || false;
    }

    if (type) {
        switch (type) {
            case "note":
                img = '/img/callouts/exclamation.min.svg';
                color = 'red';
                break;
            case "tip":
                img = '/img/callouts/lightbulb.min.svg';
                color = 'purple';
                break;
            case "laracasts":
            case "video":
                img = '/img/callouts/laracast.min.svg';
                color = 'blue';
                break;
        }

        $(this).wrap('<div></div>');
        $(this).before('<div class="icon ' + color + '"><img src="' + img + '"></div>');
        $(this).html(str.replace(/\{(.*?)\}/, ''));
        $(this).addClass('content');
        $(this).parent().addClass('callout');
    }
});

$(document).scroll(function(pos) {
    if ($(document).scrollTop() >= 50) {
        $('.go_to_top').addClass('visible');
    } else {
        $('.go_to_top').removeClass('visible');
    }
});

$('.go_to_top').click(function() {
    $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
    return false;
});
