<template lang="pug">
	section.cases
		div.container
			h2 Мої роботи
			div.cases__row
				div.cases__item(
					v-for="item in cases"
					:key="item.title"
				)
					h3.cases__item-title {{ item.title }}
					p.cases__item-description {{ item.description }}
					ul.cases__item-links
						li(
							v-for="link in item.links"
							:key="link"
						)
							a(
								:href="link"
								target="_blank"
								rel="noopener noreferrer"
							) {{ link }}
</template>

<script setup lang="ts">
const cases = [
	{
		title: "SDG Trade",
		description: "наповнення сайту статтями, навчальним матеріалом, ведення блогу, e-mail-розсилка, підбір необхідних фото до матеріалів",
		links: [
			"https://sdg-trade.com/market/stati/zalog-uspexa-professionalnogo-trejdera",
			"https://sdg-trade.com/market/stati/mozhno-li-obuchitsya-trejdingu-samostoyatelno"
		],
	},
	{
		title: "Loanexpert",
		description: "наповнення сайту всією інформацією, робота з панеллю адміністратора, написання коментарів, тексти для блогу, інформативні тексти",
		links: [
			"https://vseokreditah.com.ua/pochemu-it-industriya-ukraine-mozhet-stat-privlekatelnoj-dlya-inostrannyh-investorov-v-2021-godu-innovatsii",
			"https://loanexpert.net.ua/blog/kvartirnyj-vopros-pokupat-ili-arendovat/",
		],
	},
	{
		title: "Bigmir.net",
		description: "збір та аналіз новинних матеріалів з різних джерел, написання та редагування новинних статей з урахуванням креативних та SEO, планування та публікація новинних матеріалів на порталі, стеження за трендами та актуальними подіями для включення їх у стрічку новин",
		links: [
			"https://news.bigmir.net/ua/ukraine/7169045-nablyudaetsya-padenie-entuziazma-gumenyuk-o-mobilizatsii-v-ukraine",
			"https://news.bigmir.net/ua/ukraine/7420056-zakonoproekt-o-mobilizatsii-v-rade-planiruyut-izmenit-normy-o-povestkakh-i-otsrochke"
		],
	}
];
</script>

<style lang="scss" scoped>
.cases {
	padding: 120px 0;
	color: $dark-gray;

	@include tablet-md {
		padding: 80px 0;
	}

	h2 {
		text-align: center;
		font-size: 52px;
		font-weight: 500;
		margin-bottom: 64px;

		@include tablet-md {
			font-size: 48px;
		}

		@include mobile {
			font-size: 32px;
		}
	}

	&__row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		@include tablet-md {
			flex-direction: column;
			align-items: center;
		}
	}

	&__item {
		width: 33%;
		max-width: 320px;

		@include tablet-md {
			width: 100%;
			max-width: 420px;
			margin-bottom: 40px;
		}

		&-title {
			font-size: 24px;
			font-weight: 500;
			margin-bottom: 16px;
			text-align: center;

			@include tablet-md {
				font-size: 20px;
			}

			@include mobile {
				font-size: 18px;
			}
		}

		&-description {
			font-size: 16px;
			line-height: 1.3;
			margin-bottom: 16px;
		}

		&-links {
			list-style: disc;
			margin-left: 16px;
			color: $gray;

			li {
				margin-bottom: 8px;
			}

			a {
				font-size: 16px;
				font-weight: 400;
				color: $gray;
				transition: color 0.3s ease-in-out;
				margin: 0 0 8px 0;
				text-decoration: none;

				&:hover {
					color: $light-green;
				}
			}
		}
	}
}
</style>
