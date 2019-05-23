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