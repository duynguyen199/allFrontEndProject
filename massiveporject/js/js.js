// $(window).scroll(()=>{
//     var sticky=$('#headerFixed')
//     var scroll=$(window).scrollTop();
//     if(scroll>=100){
//         sticky.addClass('fixed');

//     }else{
//         sticky.removeClas('fixed');
//     }
// })
$(window).scroll(()=>{
       var scroll=$(window).scrollTop();
       var headerFixed=$('#headerFixed');
       var imgFixed=$('#img-fixed');
       if(scroll>=100){
            headerFixed.addClass('changeHeader');
            imgFixed.addClass('chaneIMG');
       }else{
        headerFixed.removeClass('changeHeader');
        imgFixed.removeClass('chaneIMG');
       }

})

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
 });