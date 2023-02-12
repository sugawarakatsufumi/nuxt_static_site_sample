$(function(){
  const isIPad = /iPad|Macintosh/i.test(navigator.userAgent) && 'ontouchend' in document;
  const active_flg = 500;
  
  $(window).on('load scroll', function(){
    self_p = $(window).scrollTop();
    //ヘッダーの背景スクロールで表示非表示処理
    if( 300 < self_p ){
      $('.wrap-content.header-wrap').addClass('is-active');
    }else{
      $('.wrap-content.header-wrap').removeClass('is-active');
    }
  });

  //ページ内スムースリンク
  $('a[href*="/#"]').on('click', function(){
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
  
  if(isIPad){
    /*$('.concept').addClass('is-active');
    $('.mis-taste').addClass('is-active');
    $('.special').addClass('is-active');
    $('.sweet-taste').addClass('is-active');
    $('.summary').addClass('is-active');
    $('.taste-try').addClass('is-active');*/
  }else{
    $(window).on('load scroll', function(){
      self_p = $(window).scrollTop();
      if( ($('.about').offset().top-active_flg) < self_p ){
        $('.about').addClass('is-active');
      }
      if( ($('.safety').offset().top-active_flg) < self_p ){
        $('.safety').addClass('is-active');
      }
      if( ($('.biz').offset().top-active_flg) < self_p ){
        $('.biz').addClass('is-active');
      }
      if( ($('.history').offset().top-active_flg) < self_p ){
        $('.history').addClass('is-active');
      }
      if( ($('.recruit').offset().top-active_flg) < self_p ){
        $('.recruit').addClass('is-active');
      }
    });
  }
  $('.slider').bxSlider({
    mode:'fade',
    touchEnabled:false,
    auto:true,
    onSlideBefore: function(){
      //表示化け対策
      $('.hero-img-list__item.parallax .background').css(	'transform','translate(-50%, 0px)');
    }
  });
})