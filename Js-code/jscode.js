$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function () {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });

    $('li.sidebar-brand a').click(function () {
        $('.me-info').html();// сгенерить разметку при выборе меня
    })

    $('#stories').click( function () {
        $('.me-info').html();// сгенерить разметку при выборе историй
    });
    $('#about-me').click( function () {
        $('.me-info').html();// сгенерить разметку при выборе инфы о мне
    });
    $('#social-network').click( function () {
        $('.me-info').html();// сгенерить разметку при  социальных ссылок
    });
});