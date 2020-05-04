import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

module.exports =  {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  router: {
	  middleware: [
		  'clearValidationErrors'
	  ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
	  './plugins/mixins/validation',
	  './plugins/axios'
  ],

  auth: {
	  strategies: {
		  local: {
			  endpoints: {
				  login: {url: 'auth/login', method: 'post', propertyName: 'token'},
				  logout: { url: 'auth/logout', method: 'post' },
        		  user: { url: '/user', method: 'get', propertyName: 'user' }
			  }
		  }
	  },
	  redirect: {
		  login: '/auth/login',
		  home: '/'
	  }
   },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
	'@nuxtjs/axios',
	'@nuxtjs/dotenv',
	'@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
	baseURL: process.env.API_URL
	//proxy: true
  },
//  proxy: {
//	  "/api":{
//		  target: "http://localhost:8000/api/",
//		  pathRewrite: {
//			  "^/api/": "/"
//		  },
//		  changeOrigin: true
//	  }
//},

  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
