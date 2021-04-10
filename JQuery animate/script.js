$(document).ready(function(){
    $(document).keydown(function(){
        $('div').animate({
            left: "+=32px",
            width: "+=32px",
            height: "+=32px",
            opacity: "-=0.16"
        },500);
    });
});