import colors from 'vuetify/es5/util/colors'
//import Vue from 'vue'
//import * as VueGoogleMaps from 'vue2-google-maps'
//import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'
//import * as VueGoogleMaps from 'vue2-google-maps/dist/vue-google-maps-stubbed'
require('dotenv').config()

//Vue.use(VueGoogleMaps, {
//	load: {
//		key: 'AIzaSyDrHX3V2L-Ekb2z4MLRqXaW64CraG6RCrE',
//		libraries: 'places'
//	},
//	installComponents: true
//})

module.exports = {
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
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Rubik&display=swap' }
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
		'./plugins/axios',
		//{ src: './plugins/vue2-google-maps.js', ssr: false }
	],

	auth: {
		strategies: {
			local: {
				endpoints: {
					login: { url: 'login', method: 'post', propertyName: 'access_token' },
					user: { url: 'getuser', method: 'get', propertyName: 'user' },
					//komunitas: { url: 'datakomunitas', method: 'get', propertyName: 'komunitas' }
					//  logout: { url: 'auth/logout', method: 'post' },
					//  refresh: { url: 'auth/refresh', method: 'get', propertyName: ''},
				},
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
		treeShake: true,
		theme: {
			dark: false,
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
		extend(config, ctx) {
			//transpile: [/^vue2-google-maps($|\/)/]
		},
		transpile: [/^vue2-google-maps($|\/)/]
	}
}
