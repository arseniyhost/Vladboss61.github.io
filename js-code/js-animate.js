$(document).ready(function () {
    //Jump(true, $('span.v-jump'));
});
function Jump(flag, obj) {
    var jump = obj;
    setInterval(function () {
        if(flag){
            jump.addClass('paused');
            flag = false;
        }else {
            jump.removeClass('paused');
            flag = true;
        }
    },3000);
}