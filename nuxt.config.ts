// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
			apiUrl: process.env.API_BASE_URL,
		},
	},
	app: {
		baseURL: '',
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700'
				}
			],
			script: [
				{
					src: 'https://www.googletagmanager.com/gtag/js?id=G-7Y5MQZJTYF',
					async: true,
				},
			]
		},
	},
	css: ['~/assets/css/reset.css', '~/assets/css/grid.css'],
	postcss: {
		plugins: {
			autoprefixer: {},
		},
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/index.scss";',
				},
			},
		},
	},
	modules: [
		'nuxt-font-loader',
	],
	//font-loader configuration could be added below
});
