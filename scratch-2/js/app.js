jQuery(document).ready(function() {
    jQuery("#back-to-top, .menu > h1").each(function(){
    jQuery(this).click(function(){ 
        jQuery("html,body").animate({ scrollTop: 0 }, 'slow');
        return false; 
    });
});
});