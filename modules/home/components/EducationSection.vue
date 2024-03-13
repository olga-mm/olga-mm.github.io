<template lang="pug">
	section.education
		div.container-sm
			h2 Освіта
			ul
				li
					b Київський університет імені Бориса Грінченка
					span Інформаційна, бібліотечна та архівна справа, Київ, вища, з 2014 по 2019 (5 років)
			h2 Додаткова освіта, курси
			ul
				li
					b Курс "PRO-копірайтинг", навчальна платформа Genius:
					span 2022 рік, 2 місяці
				li
					b Курс "Копірайтинг", навчальна платформа Campster:
					span 2022 рік, 2 місяці
				li
					b Курс "Журналістика і соцмережі"
					span 2023 рік, 1 місяць
				li
					b "Основи АІ" від Google
					span лютий, 2024 рік
				li
					b Онлайн-лекція "Штампи, кліше, канцеляризми в копірайтингу"
					span березень, 2024 рік
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.education {
	background: $light-green;
	color: $dark-gray;
	padding: 60px 0;

	@include tablet-md {
		padding: 40px 0;
	}

	h2 {
		text-align: center;
		font-size: 52px;
		font-weight: 500;
		margin-bottom: 36px;

		@include tablet-md {
			font-size: 48px;
		}

		@include mobile {
			font-size: 32px;
		}
	}

	ul {
		font-size: 14px;
		line-height: 1.5;
		margin: 0 16px 40px 16px;

		li {
			margin-bottom: 24px;
			list-style: disc;

			@include tablet-md {
				margin-bottom: 16px;
			}

			b {
				font-size: 16px;
				font-weight: 500;
				margin-bottom: 4px;
				display: block;
			}

			span {
				font-size: 16px;
				font-weight: 400;
			}
		}
	}
}
</style>
