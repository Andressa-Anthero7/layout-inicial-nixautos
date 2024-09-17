$(document).ready(function(){
    // Quando o mouse entrar e sair do link (hover)
    $('#chevron-sidebar').hover(
        function() {
            // Quando o mouse entra (hover)
            $(this).css({'background-color': '#495057'});
            $('.content').css({'margin-left':'200px'});
            $('.sidebar p').css({'display':'inline','font-size':'16px'});
            $('.sidebar').css({'width':'180px'});
        },
        function() {
            // Quando o mouse sai (reverter as mudanças)
            $(this).css({'background-color': ''}); // Remove o fundo aplicado
            $('.content').css({'margin-left':'45px','padding':'20px','margin-top':'56px'}); // Reverte o margin-left
            $('.sidebar p').css({'display':'none'}); // Oculta os parágrafos
            $('.sidebar').css({'width':'45px'}); // Volta para a largura original
        }
    );


    
});
