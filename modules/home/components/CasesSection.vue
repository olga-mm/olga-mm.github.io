<template lang="pug">
	section.cases
		div.container
			h2 Мої роботи
			div.cases__row
				div.cases__item(
					v-for="item in cases"
					:key="item.title"
				)
					h3.cases__item-title
						a(
							v-if="item.link"
							:href="item.link"
							target="_blank"
							rel="noopener noreferrer"
						) {{ item.title }}
						span(v-else) {{ item.title }}
					p.cases__item-description {{ item.description }}
</template>

<script setup lang="ts">
const cases = [
	{
		title: "SDG Trade",
		description: "Комплексна робота з контентом фінансового проєкту. Займалася наповненням сайту експертними статтями та навчальними матеріалами для трейдерів різного рівня підготовки. Вела блог компанії: підбирала теми, готувала структуровані тексти з поясненнями складних фінансових термінів простою мовою. Також створювала e-mail-розсилки для залучення та утримання аудиторії, працювала з підбором і підготовкою візуального контенту (зображення, ілюстрації) відповідно до стилю сайту та матеріалів.",
	},
	{
		title: "Loanexpert",
		description: "Повне наповнення сайту інформаційним контентом із фінансової тематики. Працювала з адміністративною панеллю сайту, готувала та публікувала тексти для блогу, аналітичні й інформативні матеріали для користувачів. Описувала фінансові продукти та послуги, писала пояснювальні тексти й коментарі, адаптуючи складну інформацію під зрозумілий формат для широкої аудиторії. Особливу увагу приділяла структурі текстів, логіці подачі та корисності матеріалів.",
	},
	{
		title: "Bigmir.net",
		description: "Робота у форматі новинного медіа. Займалася щоденним моніторингом інформаційних джерел, оперативним пошуком актуальних тем і подій. Писала та редагувала новинні матеріали з урахуванням редакційних стандартів і SEO-вимог. Працювала з заголовками, структурою текстів, фактчекінгом і швидкою публікацією матеріалів на порталі. Вела планування новинної стрічки, стежила за трендами та оперативно інтегрувала важливі події в контент сайту.",
	},
	{
		title: "Лінія Інфо",
		link: "https://liniya.info/",
		description: "Створила новинний портал з нуля та виконувала обов’язки головного редактора. Відповідала за повний цикл роботи з контентом: планування, написання та редагування новин, управління командою, публікацію матеріалів на сайті. Займалася аналітикою трендів, моніторингом подій у реальному часі та адаптацією інформації для читачів. Забезпечувала якість текстів, дотримання стандартів журналістики та SEO, а також інтегрувала мультимедійний контент.",
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
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 40px;

		@include tablet-md {
			grid-template-columns: 1fr;
			gap: 60px;
			max-width: 420px;
			margin: 0 auto;
		}
	}

	&__item {
		&-title {
			font-size: 24px;
			font-weight: 500;
			margin-bottom: 16px;

			@include tablet-md {
				font-size: 20px;
			}

			@include mobile {
				font-size: 18px;
			}

			a {
				color: $dark-gray;
				text-decoration: underline;
				transition: color 0.3s ease-in-out;

				&:hover {
					color: $light-green;
				}
			}
		}

		&-description {
			font-size: 14px;
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
