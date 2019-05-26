jQuery('document').ready(function(){
    jQuery('.dropdown-submenu > a').on("click", function(e) {
        var submenu = jQuery(this);
        jQuery('.dropdown-submenu .dropdown-menu').removeClass('show');
        submenu.next('.dropdown-menu').addClass('show');
        e.stopPropagation();
    });
    
    jQuery('.dropdown').on("hidden.bs.dropdown", function() {
        // hide any open menus when parent closes
        jQuery('.dropdown-menu.show').removeClass('show');
    });

    if(jQuery("#cart-preview tr").length == 0){
        prod_item = '<tr id="cart-empty" class="no-gutters"><td>Nenhum produto adicionado</td></tr>';
        jQuery("#cart-preview .table tbody").append(prod_item); 
    }

 
        jQuery('.cart-add').on('click', function(){
        

            //adicionando ao carrinho
            var prod_id, prod_qtd, qtd_old, qtd_new, qtd_final , prod_name, prod_thumb, prod_price, prod_item; 
    
            prod_id = jQuery(this).parents('.card').attr('data-id'); 
            prod_qtd = jQuery(this).parents('.card').find('.prod-qtd').val(); 
            prod_name = jQuery(this).parents('.card').find('.card-title').attr('data-name'); 
            prod_thumb = jQuery(this).parents('.card').find('.card-img-top').attr('data-img'); 
            prod_price = jQuery(this).parents('.card').find('.card-price').attr('data-price');   
    
            jQuery('#cart-empty').remove();
    
            if(jQuery('.prod-preview').attr('id') == prod_id ){
                qtd_old = parseInt(jQuery("#cart-preview .column-qtd").text());
                qtd_new = parseInt(prod_qtd); 
                qtd_final = parseInt(qtd_old + qtd_new);
    
                jQuery("#cart-preview .column-qtd").text(qtd_final);
            }else{
                prod_item = 
                '<tr id="'+prod_id+'" class="no-gutters prod-preview">'+
                    '<td class="column-thumb"><img src="'+prod_thumb+'" alt="Miniatura do produto" class="img-fluid"></td>'+
                    '<td class="text-left column-preview"><a href="#" title="'+prod_name+'" class="preview-link">'+prod_name+'</a></td>'+
                    '<td class="text-center column-qtd">'+prod_qtd+'</td>'+
                    '<td class="text-center column-price">R$ '+prod_price+'</td>'+
                    '<td class="text-center"><a href="" title="Remover produto">X</td>'+
                '</tr>';
            }

            console.log(prod_item);
    
            jQuery("#cart-preview .table tbody").append(prod_item);    
    
            //push notification
            jQuery("#modalNotification").addClass('animated slideInUp').show(); 
            jQuery("#notified-thumb").attr('src', prod_thumb); 
            jQuery("#notified-link").attr('title', prod_name).text(prod_name); 
            
            setTimeout(function(){
                jQuery("#modalNotification").removeClass('animated slideInUp').hide(); 
            }, 3000);
            
        })
    });
    

jQuery("window").scroll( function(){

    console.log('teste');

    var header = jQuery(document).scrollTop();
    var headerHeight = jQuery("#header").outerHeight();

    if(header > headerHeight){
        jQuery('#header').addClass('sticky-top');
    }else{
        jQuery('#header').removeClass('sticky-top');
    }
});