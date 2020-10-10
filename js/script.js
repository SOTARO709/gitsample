$(function() {

  $(window).resize(function(){
    //windowの幅をxに代入
    var x = $(window).width();
    //windowの分岐幅をyに代入
    var y = 940;
    if (x > y) {
        $('.l-side_wrapper').removeClass('open')   
        $('.l-side_overlay').css(
          'display','none')

    }else{}
});

  $('.l-header_menu').on('click', function(){
  $('.l-side_wrapper').addClass('open')
  
});

$('.l-side_close').on('click', function(){
  $('.l-side_wrapper').removeClass('open')
});


$('.l-header_menu').on('click', function(){
$('.l-side_overlay').css({'display' : 'block',
});

$('.l-side_close').on('click', function(){
  $('.l-side_overlay').css({'display' : 'none',
});
 


  
    });


});
});


