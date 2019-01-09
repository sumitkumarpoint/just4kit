
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