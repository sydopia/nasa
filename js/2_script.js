$(document).scroll(function(){

var y = $(document).scrollTop();
   
if (y < 150) {
    $("#one").fadeIn();
}
else{
    $("#one").fadeOut();
}
    
if (y > 150 && y < 300) {
    $("#seven").fadeIn();
}
else{
    $("#seven").fadeOut();
}

if (y > 300 && y < 450) {
    $("#eight").fadeIn();
}
else{
    $("#eight").fadeOut();
}
    
if (y > 450 && y < 600) {
    $("#nine").fadeIn();
}
else{
    $("#nine").fadeOut();
}
    
if (y > 600 && y < 750) {
    $("#ten").fadeIn();
}
else{
    $("#ten").fadeOut();
} 
    
if (y > 750 && y < 900) {
    $("#eleven").fadeIn();
}
else{
    $("#eleven").fadeOut();
}
    
if (y > 900 && y < 1050) {
    $("#twelve").fadeIn();
}
else{
    $("#twelve").fadeOut();
}
    
if (y > 1050 && y < 1200) {
    $("#thirteen").fadeIn();
}
else{
    $("#thirteen").fadeOut();
}
    
if (y > 1200 && y < 1350) {
    $("#fourteen").fadeIn();
}
else{
    $("#fourteen").fadeOut();
}
    
if (y > 1350 && y < 1500) {
    $("#fifteen").fadeIn();
}
else{
    $("#fifteen").fadeOut();
}
    
if (y > 1500 && y < 1650) {
    $("#sixteen").fadeIn();
}
else{
    $("#sixteen").fadeOut();
}
    
if (y > 1650 && y < 1800) {
    $("#seventeen").fadeIn();
}
else{
    $("#seventeen").fadeOut();
}
});