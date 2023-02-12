
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '蔵王米菓',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '静的サイトジェネ学習用です' }
    ],
    /*link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]*/
    script:[
      {src:'/js/jquery.min.js'},
      {src:'/js/drawer.min.js'},
      {src:'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'},
      {src:'/js/jquery.bxslider.js'},
      {src:'/js/parlx.js'},
      {src:'/js/common.js'},
    ],
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.scss',
    '~/static/webfonts/css/font-awesome.min.css',
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  bodyAttrs: {
    class: 'drawer drawer--right'
  },
}
