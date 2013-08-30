$(document).ready(function(){
    $('.certificate').click(function(e){
        e.preventDefault();
        //finding target image div
        var pic_id = '#' + $(this).parent().attr('id') + 'pic';
        if ($(this).parent().attr('id') == undefined)
            pic_id = '#' + $(this).parent().parent().parent().parent().attr('id') + 'pic';
        window.pic_id = pic_id
        //setting up style for image div
        var margin_left = -$(pic_id).width()/2 + 'px';
        var margin_top =  -$(pic_id).height()/2 + 'px';
        var top = $(window).height()/2 + $(document).scrollTop()
        $(pic_id).css({'margin-left': margin_left, 'margin-top': margin_top, 'top': top});
        //animate
        $(pic_id).slideDown('slow');
        $('.shadow_background').slideDown('slow');
    });


    $('.shadow_background, .s-image').click(function(){
        $(pic_id).slideUp('slow');
        $('.shadow_background').slideUp('slow');
    });
})

