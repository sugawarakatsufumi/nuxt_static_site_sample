<template>
<div>
  <div class="wrap-content header-wrap" >
    <header class="header">
      <h1>
        <a href="/" class="header-h">
          <span class="header-h__desc">食の安全と皆様の健康を願う</span>
          <img class="header-h__logo" src="~/static/img/common/logo.svg" alt="蔵王米菓ロゴ" />
        </a>
      </h1>
      <nav class="g-nav">
        <ul class="g-nav-pc">
          <li class="g-nav-pc__item"><nuxt-link to="about">お知らせ</nuxt-link></li>
          <li class="g-nav-pc__item"><a href="/#hush-safety">安心・安全への取り組み</a></li>
          <li class="g-nav-pc__item"><a href="/pb-oem.php">PB/OEM商品</a></li>
          <li class="g-nav-pc__item"><a href="/company.php">会社案内</a></li>
          <li class="g-nav-pc__item"><a href="/#hush-biz">業務案内</a></li>
          <li class="g-nav-pc__item"><a href="">採用情報</a></li>
          <li class="g-nav-pc__item"><a href="/inquiry.php">お問い合わせ</a></li>
          <li class="g-nav-pc__item"><a href=""><i class="fa fa-shopping-basket" aria-hidden="true"></i> ショッピング</a></li>
        </ul>
      </nav>
    </header>
  </div>
  <nav class="drawer-nav mb-g-nav " role="navigation">
    <ul class="drawer-menu">
      <li class="drawer-menu-item"><a href="/"><i class="fa fa-home" aria-hidden="true"></i> ホーム</a></li>
      <li class="drawer-menu-item"><a href="/info.php">お知らせ</a></li>
      <li class="drawer-menu-item"><a href="/#hush-safety">安心・安全への取り組み</a></li>
      <li class="drawer-menu-item"><a href="/pb-oem.php">PB/OEM商品</a></li>
      <li class="drawer-menu-item"><a href="/company.php">会社案内</a></li>
      <li class="drawer-menu-item"><a href="/#hush-biz">業務案内</a></li>
      <li class="drawer-menu-item"><a href="">採用情報</a></li>
      <li class="drawer-menu-item"><a href="/inquiry.php">お問い合わせ</a></li>
      <li class="drawer-menu-item"><a href=""><i class="fa fa-shopping-basket" aria-hidden="true"></i> ショッピング</a></li>
      <li class="drawer-dropdown">
        <a class="drawer-menu-item" data-toggle="dropdown" role="button"><i class="fa fa-phone-square" aria-hidden="true"></i> 電話する <span class="drawer-caret"></span></a>
        <ul class="drawer-dropdown-menu">
          <li><a class="drawer-dropdown-menu-item" href="tel:0237-55-2335"><i class="fa fa-phone" aria-hidden="true"></i> 本社工場・本社営業所</a></li>
          <li><a class="drawer-dropdown-menu-item" href="tel:0237-53-9911"><i class="fa fa-phone" aria-hidden="true"></i> 楯岡工場</a></li>
        </ul>
      </li>
      <li class="drawer-dropdown"><a class="drawer-menu-item" data-toggle="dropdown" role="button">その他 <span class="drawer-caret"></span></a>
        <ul class="drawer-dropdown-menu">
          <li><a class="drawer-dropdown-menu-item" href="">プライバシーポリシー</a></li>
          <li><a class="drawer-dropdown-menu-item" href="">サイトマップ</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  <button type="button" class="mb-g-nav-toggle drawer-toggle drawer-hamburger">
    <span class="sr-only">toggle navigation</span>
    <span class="drawer-hamburger-icon"></span>
  </button>
  <main><Nuxt /></main>
  <footer class="footer">
    <div class="ft-nav">
      <div class="ft-nav-logo">
        <a href="/" class="ft-nav-logo-h">
          <span class="ft-nav-logo-h__desc">食の安全と皆様の健康を願う</span>
          <img class="ft-nav-logo-h__logo" src="img/common/logo.svg" alt="蔵王米菓ロゴ" />
        </a>
      </div>
      <nav class="ft-nav-main">
        <ul class="ft-nav-main-pc">
          <li class="ft-nav-main-pc__item"><a href="">お知らせ</a></li>
          <li class="ft-nav-main-pc__item"><a href="">蔵王米菓とは</a></li>
          <li class="ft-nav-main-pc__item"><a href="">安心・安全への取り組み</a></li>
          <li class="ft-nav-main-pc__item"><a href="">PB/OEM商品</a></li>
          <li class="ft-nav-main-pc__item"><a href="">会社案内</a></li>
          <li class="ft-nav-main-pc__item"><a href="">業務案内</a></li>
          <li class="ft-nav-main-pc__item"><a href="">採用情報</a></li>
          <li class="ft-nav-main-pc__item"><a href="">お問い合わせ</a></li>
          <li class="ft-nav-main-pc__item"><a href=""><i class="fa fa-shopping-basket" aria-hidden="true"></i> ショッピング</a></li>
        </ul>
      </nav>
    </div>
    <div class="footer__sub">
      <ul class="ft-fact-info">
        <li class="ft-fact-info__item">
          <h2 class="fact-info__name">本社工場・本社営業所</h2>
          <p class="fact-info__add">〒995-0005　山形県村山市たも山4600-84</p>
          <p class="fact-info__tel">TEL：0237(55)2335 FAX：0237(55)7086</p>
        </li>
        <li class="ft-fact-info__item">
          <h2 class="fact-info__name">楯岡工場</h2>
          <p class="fact-info__add">〒995-0036　山形県村山市楯岡中町6-5</p>
          <p class="fact-info__tel">TEL：0237(53)9911　FAX：0237(53)9912</p>
        </li>
      </ul>
      <nav class="ft-nav-sub">
        <a href="" class="ft-nav-sub__item">サイトマップ</a>
        <a href="" class="ft-nav-sub__item">プライバシーポリシー</a>
        <span class="ft-nav-sub__item copyright">©<a href="">蔵王米菓</a>2020</span>
      </nav>
    </div>
  </footer>
  <section class="loading">
    <div class="loading-cont">
      <svg version="1.1" id="レイヤー_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
      y="0px" width="162.396px" height="162.399px" viewBox="0 0 162.396 162.399" enable-background="new 0 0 162.396 162.399"
      xml:space="preserve"
      >
        <g>
        <path fill="#E60012" d="M162.396,81.2L39.783,41.417l15.783-15.776L162.396,81.2L68.373,12.822L81.197,0C36.355,0,0,36.352,0,81.2
            l23.998-24.003L162.396,81.2z"/>
        <path fill="#E60012" d="M81.197,0l81.199,81.2C162.396,36.352,126.044,0,81.197,0"/>
        <path fill="#E60012" d="M138.381,105.219L0,81.227v0.007l122.601,39.776l-15.79,15.775L0,81.241l94.006,68.363l-12.787,12.794
            c44.825-0.01,81.167-36.357,81.177-81.188L138.381,105.219z"/>
        <path fill="#E60012" d="M0,81.241c0.027,44.815,36.339,81.128,81.15,81.158L0,81.241z"/>
        </g>
      </svg>
      <p>Loading...</p>
    </div>
  </section>
  <a class="buy-btn" style="display:none">
  <div class="buy-btn_obj"><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>購入する</span></div>
  </a>
</div>
</template>