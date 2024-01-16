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
					additionalData: '@use "@/assets/scss/index.scss" as *;',
				},
			},
		},
	},
	modules: [
		'nuxt-font-loader', 'nuxt-simple-sitemap',
	],
	//font-loader configuration could be added below
});
