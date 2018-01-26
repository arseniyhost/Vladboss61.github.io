$(document).ready(function () {
    MenuSlider();
    AnimationSmthSoon();

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

    function MenuSlider() {
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
    }
    // делаем типа анимацию smth Soon. .. ...
    function AnimationSmthSoon() {
        var tick = 0;
        setInterval(function () {
            var soon = $('div.col-lg-8');
            switch (tick){
                case 0:
                    tick++;
                    soon.html('<h1>Vlad Varvashenko | Blog</h1><h2>Smth soon.</h2>');
                    break;
                case 1:
                    tick++;
                    soon.html('<h1>Vlad Varvashenko | Blog</h1><h2>Smth soon..</h2>');
                    break;
                case 2:
                    tick++;
                    soon.html('<h1>Vlad Varvashenko | Blog</h1><h2>Smth soon...</h2>');
                    break;
                default:
                    tick = 0;
            }
        },800);
    }
});