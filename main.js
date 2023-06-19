$(document).ready(function() {
    $('header button').click(function(){
         $('form').slideDown();
    });
 
    $('#botao-cancelar').click(function(){
         $('form').slideUp();
    });
    $('form').on('submit',function(e){
        e.preventDefault();
        const novaTarefa=$('#nome-tarefa-nova').val();
        const novoItem=$('<li style="display:none"></li>');
        $(`<img src="./imagens/circle.png" title="circle" style="width:35px"/>`).appendTo(novoItem);
        $(`<h2>${novaTarefa}</h2>`).appendTo(novoItem);
        $(`<button type="reset"><img id="botao-apagar" src="./imagens/lixeira.png" title="apagar tarefa"/></button> `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2500);
        $('#nome-tarefa-nova').val('');
    })
});

    
 