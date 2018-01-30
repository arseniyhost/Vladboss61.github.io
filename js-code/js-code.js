$(document).ready(function () {
//main
    //AnimationSmthSoon();-- надо что то решать ??? все норм clearInterval юзад
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
                         <li>
                            <a href="https://plus.google.com/u/0/100026292549071673782" target="_blank">
                            <img class="img-circle" src="images\\icons-social-networks\\Google-Plus-Icon_22090.png" alt="">
                            </a>
                        </li>
                    </ul>
                </div>`;

        $('.me-info').html(html);// сгенерить разметку при  социальных ссылок
        $('.social-net li').animate({
            opacity: 1
        },1200);
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
        var out = null;
        $(document).on('click','.col-lg-8 img.img-circle', function () {
            if(flag){
                //$('div.col-lg-8 .smth-soon h2').addClass();
                out = AnimationSmthSoon();

                flag = false;
            }else {
                StopAnimationSmthSoon(out);
                 // $('div.col-lg-8 .smth-soon h2').removeClass('opclass');
                $('div.col-lg-8 .smth-soon').html(' ');
                flag = true;
            }
        });
    }
    //просто обертка с другим именем
    function StopAnimationSmthSoon(out) {
        clearInterval(out);
    }
    // делаем типа анимацию smth Soon. .. ...
    function AnimationSmthSoon() {
        var tick = 0;
        var out = setInterval(function () {
            var soon = $('div.col-lg-8 div.smth-soon');
            //var obj = document.createElement('<h2>Smth soon.</h2>');
            //obj.addClass('animate-height-to-block');
            switch (tick){
                case 0:
                    tick++;
                    soon.html('<h2 class="animate-height-to-block">Smth soon.</h2>');
                    break;
                case 1:
                    tick++;
                    soon.html('<h2 class="animate-height-to-block">Smth soon..</h2>');
                    break;
                case 2:
                    tick++;
                    soon.html('<h2 class="animate-height-to-block">Smth soon..</h2> ');
                    break;
                default:
                    tick = 0;
            }
        },800);
        return out;
    }
});