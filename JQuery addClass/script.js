$(document).ready(function(){
    $('#title').click(function(){
        $('#text').addClass('highlighted');
        $('#text').append("<p>Now I'm highlighted!</p>");
    });
});