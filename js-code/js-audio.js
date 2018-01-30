$(document).ready(function () {
    var audio = new Audio();
    audio.src = 'audio/Markul_-_Atlantida.mp3';
    audio.load();
    $(document).on('click','img[property="audio-play"]', function () {
        if(audio.paused) {
            audio.play();
            audio.volume = 0.0;
            for(var i = 0;i < 10000 ; i++){
                setTimeout(()=>{audio.volume += 0.0001;},1);
            }
        }else {
            audio.pause();
        }
    });
});