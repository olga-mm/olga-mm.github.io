<template lang="pug">
	section.contacts
		div.container-sm
			h2 Контакти
			div.contacts__row
				div
					b Телефон:&nbsp;
					a(href="tel:+38097004010") +380 97 004 010
				div
					b Email:&nbsp;
					a(href="mailto:olga-maltseva@ukr.net") olga-maltseva@ukr.net
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
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

		b {
			font-size: 18px;
			font-weight: 500;
			margin-bottom: 16px;
			text-align: center;

			@include tablet-md {
				font-size: 20px;
			}
		}

		a {
			font-size: 18px;
			margin-bottom: 16px;
			color: $gray;
			text-decoration: none;

			@include tablet-md {
				font-size: 20px;
			}

			&:hover {
				color: $light-green;
			}
		}
	}
}
</style>
