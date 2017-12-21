$(document).ready(function() {
var winHeight = $(window).innerHeight();
$(".panel").height(winHeight);
$(window).on('scroll',function (){
    $(".left").css('bottom', $(window).scrollTop()*-1);
});
});



	
	
