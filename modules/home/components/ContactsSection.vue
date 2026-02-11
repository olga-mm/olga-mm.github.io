<template lang="pug">
	section.contacts
		div.container
			h2 Контакти
			div.contacts__row
				div
					b Telegram:&nbsp;
					span @olha_maltseva
				div
					b Instagram:&nbsp;
					span @olha.maltseva
				div
					b Телефон:&nbsp;
					a(href="tel:+380970040140") +380 97 004 0140
				div
					b Email:&nbsp;
					a(href="mailto:olga-maltseva@ukr.net") olga-maltseva@ukr.net
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '@/assets/scss/index';

.contacts {
	padding: 100px 0;
	background-color: #f5f5f5;
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
		justify-content: space-between;
		align-items: center;

		@include tablet-md {
			flex-direction: column;
			gap: 24px;
		}

		b {
			font-size: 14px;
			font-weight: 500;
			margin-bottom: 16px;
			text-align: center;

			@include tablet-md {
				font-size: 20px;
			}
		}

		a {
			font-size: 14px;
			margin-bottom: 16px;
			color: $gray;
			text-decoration: underline;

			&:hover {
				color: $light-green;
			}

			span {
				display: block;
				font-size: 14px;
				margin-bottom: 16px;
				color: $gray;
			}
		}
	}
}
</style>
