<template lang="pug">
	section.details
		div.container-md
			h3 Детальніше про мене
			p У сфері копірайтингу працюю 6 років, маю досвід у написання текстів на різні тематики (фінансові, політичні, фінтех), також мала досвід написання статей в інтернет-магазинах (опис товарів, послуг). Можу швидко знаходити якісний та актуальний матеріал, працювати з першоджерелами (іноземними також). Швидко виконую необхідний обсяг роботи з виконанням всіх вимог. Вмію працювати з програмою Photoshop для форматування контенту на сайти.
			b Моїми перевагами є:
			ul
				li глибоке вивчення теми, а також потенційного клієнта;
				li чітко сформовані тексти, без "води", тільки структурована інформація, яка буде зрозуміла читачеві;
				li швидке виконання технічного завдання та виконання дедлайнів у потрібний термін;
				li унікальність текстів;
				li грамотність, вміння працювати з інформацією, яка є від першоджерел;
				li бажання працювати на результат, а не "щоб було".
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.details {
	background: $light-gray;
	padding: 120px 0;
	color: $gray;

	@include tablet-md {
		padding: 80px 0;
	}

	h3 {
		text-align: center;
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 24px
	}

	p {
		font-size: 14px;
		line-height: 1.5;
		margin-bottom: 40px;

		@include tablet-md {
			margin-bottom: 24px;
		}
	}

	b {
		font-size: 14px;
		font-weight: 500;
		margin-bottom: 12px;
		display: block;
	}

	ul {
		font-size: 14px;
		line-height: 1.5;
		margin: 0 16px;

		@include tablet-md {
		}

		li {
			margin-bottom: 8px;
			list-style: circle;
		}
	}
}
</style>
