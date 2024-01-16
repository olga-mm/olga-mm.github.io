<template lang="pug">
	section.hero
		div.hero__row
			div.hero__col.image-col
			div.hero__col.text-col
				h1 Портфоліо
				h2 Мальцева Ольга
				p Копірайтер, рерайтер, редактор новинної стрічки

</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.hero {
	&__row {
		display: flex;
		align-items: stretch;

		@include tablet-sm {
			flex-direction: column;
		}
	}

	&__col {
		width: 50%;
		min-width: 50%;

		&.image-col {
			background-image: url('/hero-bg.jpg');
			background-size: cover;
			background-position: center;

			@include tablet-sm {
				height: 80vw;
			}
		}

		@include tablet-sm {
			width: 100%;
			min-width: 100%;
		}
	}
}

.text-col {
	display: flex;
	flex-direction: column;
	padding: 120px 48px;

	@include tablet-sm {
		padding: 60px 24px;
	}

	h1 {
		font-size: 68px;
		font-weight: 500;
		margin-bottom: 8px;
		color: $gray;

		@include tablet-lg {
			font-size: 48px;
		}

		@include tablet-sm {
			font-size: 32px;
		}
	}

	h2 {
		font-size: 68px;
		font-weight: 500;
		margin-bottom: 64px;
		color: $light-green;

		@include tablet-lg {
			font-size: 48px;
			margin-bottom: 32px;
		}

		@include tablet-sm {
			font-size: 32px;
			margin-bottom: 16px;
		}
	}

	p {
		font-size: 18px;
		font-weight: 400;
		margin-bottom: 20px;
		color: $gray;

		@include tablet-lg {
			font-size: 16px;
		}
	}
}
</style>
