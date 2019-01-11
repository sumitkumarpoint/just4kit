
$(document).ready(function(){
    var element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
});
function showLoader() {
document.getElementById('loader').style.display='block'
}
$('.menu').click(function () {
    showLoader();
    return;
});
var l=($( window ).width()-$('.flash span').width())/2;
$('.flash span').css({'position': 'fixed', 'top': '5%','left':l+'px'});
setTimeout(function () {
    $('.flash').css({'display':'none'});
},5000);
