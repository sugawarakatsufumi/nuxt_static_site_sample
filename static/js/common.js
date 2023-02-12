$(function(){
  const isIPad = /iPad|Macintosh/i.test(navigator.userAgent) && 'ontouchend' in document;
  const active_flg = 500;
  //$('body').css( 'padding-top', $('.header-wrap').height() );
  $(window).on('load', function(){
    $('.loading').addClass('is-active');
  });
  
  //for mobile global menu
  $('.drawer').drawer({
    dropdown: 'drawer-dropdown'
  });  
  
  /*$(window).on('load scroll', function(){
    self_p = $(window).scrollTop();
    if( 300 < self_p ){
      $('.buy-btn').addClass('is-active');
    }
    if( ($('.taste-try').offset().top-active_flg) < self_p ){
      $('.buy-btn').removeClass('is-active');
    }
  });
  $('.buy-btn').on('click', function(){
    $("html, body").animate({scrollTop:$('.taste-try').offset().top}, 400, "swing");
  })*/

  $('.parallax').Parlx({
    item: '.background'
  });
	//デバッグ
  $("body").append('<div id="debug" style="background:red; color:#ffffff; position:fixed; top:0px; right:0px; z-index:99;"></div>');
  $(window).bind("load scroll", getScrollTop);
  function getScrollTop(){
      self_p = $(window).scrollTop();
      $("#debug").text('WINDOW TOP '+self_p + 'px');
  }
  
  //ページ内スムースリンク
  $('.smooth-link').on('click', function(){
    let adjust = 0;
    let speed = 400;
    let href = $(this).attr("href").toString();
    href = href.match(/(#.*)/);
    href = href[0];
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
  
})