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
        const novoItem=$('<div id="corpo-da-lista" style="display:none"></div>');
        $(`<div class="icone"><img src="./imagens/circle.png" title="circle"/></div>`).appendTo(novoItem);
        $(`<div class="tarefa"><h2>${novaTarefa}</h2></div>`).appendTo(novoItem);
        $(`<div class="botao"><button  type="reset"><img id="botao-apagar" src="./imagens/lixeira.png" title="apagar tarefa"/></button></div>`).appendTo(novoItem);
        $(novoItem).appendTo('main');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa-nova').val('');
        $('main button img').click(function(){
            $(novoItem).slideUp('main');
        });

        $(novoItem).click(function(e){
        e.preventDefault();
        $(novoItem).val('');
        $(`<div id="corpo-da-lista" style="background-color:gray"></div>`).appendTo(novoItem);
        $(`<div class="icone"><img src="./imagens/check.png" title="circle"/></div>`).appendTo(novoItem);
        $(`<div><h2 style="text-decoration:line-through">${novaTarefa}</h2></div>`).appendTo(novoItem);
        $(novoItem).appendTo('main');
        })
       
    })
});

    
 