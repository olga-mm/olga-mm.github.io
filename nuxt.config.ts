// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
			apiUrl: process.env.API_BASE_URL,
		},
	},
	imports: {
		autoImport: true,
		dirs: ['stores'],
	},
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
		},
	},
	css: ['~/assets/css/reset.css'],
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
		['@pinia/nuxt',
			{
				autoImports: ['defineStore', 'acceptHMRUpdate'],
			},
		],
	],
	//font-loader configuration could be added below
});
