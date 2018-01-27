$(document).ready(function () {
//main
    //AnimationSmthSoon();
    clickedOnMainPhoto();
    MenuSlider();



    $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
    });

    $('li.sidebar-brand a').click(function () {
        $('.me-info').html(' ');// сгенерить разметку при выборе меня
    })

    $('#stories').click( function () {
        $('.me-info').html(' ');// сгенерить разметку при выборе историй
    });
    $('#about-me').click( function () {
        $('.me-info').html(' ');// сгенерить разметку при выборе инфы о мне
    });
    $('#social-network').click( function () {
        var html = `<div class="social-net">                   
                    <ul>
                        <li>
                            <a href="http://t.me/VladikDRow" target="_blank"> 
                                <img class="img-circle" src="images\\icons-social-networks\\telegram_icon-icons.com_72055.png" alt="">
                            </a>
                        </li>
                        <li id="git-logo">
                            <a href="https://github.com/vladboss61" target="_blank">
                                <img  class="img-circle" src="images\\icons-social-networks\\Github.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/evilvladik/" target="_blank">
                            <img class="img-rounded" src="images\\icons-social-networks\\instagram_socialnetwork_20033.png" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/FlexLikeVlad" target="_blank">
                            <img class="img-circle" src="images\\icons-social-networks\\twitter_socialnetwork_20007.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>`;
        $('.me-info').html(html);// сгенерить разметку при  социальных ссылок
    });


//~main
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
    function clickedOnMainPhoto() {
        var flag = true;
        $(document).on('click','.col-lg-8 img.img-circle', function () {
            if(flag){
                $('.col-lg-8 img.img-circle + div').addClass('smth-soon');
                AnimationSmthSoon();
                flag = false;
            }else {
                $('div.col-lg-8 .smth-soon').html(' ');
                $('.col-lg-8 img.img-circle + div').removeClass()('smth-soon');
                flag = true;
            }
        });
    }


    // делаем типа анимацию smth Soon. .. ...
    function AnimationSmthSoon() {
        var tick = 0;
        setInterval(function () {
            var soon = $('div.col-lg-8 div.smth-soon');
            switch (tick){
                case 0:
                    tick++;
                    soon.html('<h2>Smth soon.</h2>');
                    break;
                case 1:
                    tick++;
                    soon.html('<h2>Smth soon..</h2>');
                    break;
                case 2:
                    tick++;
                    soon.html('<h2>Smth soon...</h2>');
                    break;
                default:
                    tick = 0;
            }
        },800);
    }
});