$(document).ready(function () {
    var audio = new Audio();
    audio.src = 'audio/Markul_-_Atlantida.mp3';
    $(document).on('click','img[property="audio-play"]', function () {
        if(audio.paused) {
            audio.play();
        }else {
            audio.pause();
        }
    });
});