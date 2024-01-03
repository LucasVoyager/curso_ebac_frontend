$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
})

$('#resetar-but').click(function(){
    $('form').slideUp();
})

$('form').on('submit', function(e){
    e.preventDefault();
    const tarefa = $('#tarefa').val();
    novaTarefa = $('<li style="display:none"></li>');
    $(`<li>${tarefa}</li>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $(novaTarefa).fadeIn(1000);
    $(novaTarefa).click(function() {
        $(this).toggleClass('li-clicked');
    })})