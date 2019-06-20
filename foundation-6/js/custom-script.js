$('document').ready(function(){

    $('#menu-trigger').click(function(){
        
        $(this).toggleClass('active');
        $('#menu').toggleClass('active');
        $('body').toggleClass('overflowHidden');
    });

    if($("#cart-preview tr").length == 0){
        prod_item = '<tr id="cart-empty" class="no-gutters"><td>Nenhum produto adicionado</td></tr>';
        $("#cart-preview .table tbody").append(prod_item); 
    }

    var addedProductCodes = [];
    $('.cart-add').on('click', function(){
    

        //adicionando ao carrinho
        var prod_id, prod_qtd, qtd_old, qtd_new, qtd_final , prod_name, prod_thumb, prod_price, prod_item; 

        prod_id = $(this).parents('.card').attr('data-id'); 
        prod_qtd = $(this).parents('.card').find('.prod-qtd').val(); 
        prod_name = $(this).parents('.card').find('.card-title').attr('data-name'); 
        prod_thumb = $(this).parents('.card').find('.card-img-top').attr('data-img'); 
        prod_price = $(this).parents('.card').find('.card-price').attr('data-price'); 
        price_new = prod_price.replace(/\,00$/,'');  

        $('#cart-empty').remove();
        prod_item = 
        '<tr id="'+prod_id+'" class="no-gutters prod-preview">'+
            '<td class="column-thumb"><img src="'+prod_thumb+'" alt="Miniatura do produto" class="img-fluid"></td>'+
            '<td class="text-left column-preview"><a href="#" title="'+prod_name+'" class="preview-link">'+prod_name+'</a></td>'+
            '<td class="text-center column-qtd">'+prod_qtd+'</td>'+
            '<td class="text-center column-price" data-price="'+price_new+'">R$ '+prod_price+'</td>'+
            '<td class="text-center"><a href="" title="Remover produto">X</td>'+
        '</tr>';

        var index = $.inArray(prod_id, addedProductCodes);

        if (index >= 0) {
            $('.prod-preview').each(function(){
                if($(this).attr('id') == prod_id ){
                    qtd_old = parseInt($(".column-qtd", this).text());
                    qtd_new = parseInt(prod_qtd); 
                    qtd_final = parseInt(qtd_old + qtd_new);
    
                    $(".column-qtd", this).text(qtd_final);
                }
            });
            
        }else{
            $("#cart-preview .table tbody").append(prod_item);   
            addedProductCodes.push(prod_id);
        }

        var itens_total = 0, price_unit = 0, price_total = 0;
        $('.prod-preview').each(function(){
            itens_total += parseInt($(".column-qtd", this).text()); 
            price_unit = parseInt($(".column-price", this).attr('data-price')) ; 
            prod_price = itens_total * price_unit;

            price_total += prod_price;
            
        });
        $('#qtd-itens').text(itens_total);
 

        //push notification
        $("#modalNotification").addClass('animated slideInUp').show(); 
        $("#notified-thumb").attr('src', prod_thumb); 
        $("#notified-link").attr('title', prod_name).text(prod_name); 
        
    });

    $('#modalNotification .close-button').on('click', function(){
        $("#modalNotification").removeClass('animated slideInUp').hide();
    });

});
    

$(window).on('scroll', function(){

    var header = $(document).scrollTop();
    var headerHeight = $("#header").outerHeight();

    if(window.innerWidth > 992){
        if(header > headerHeight){
            $('#header').addClass('sticky-top');
        }else{
            $('#header').removeClass('sticky-top');
        }
    }
});