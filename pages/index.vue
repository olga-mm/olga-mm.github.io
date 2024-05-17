<template lang="pug">
HeroSection
DetailsSection
EducationSection
CasesSection
ContactsSection
</template>

<script lang="ts" setup>
import HeroSection from "~/modules/home/components/HeroSection.vue";
import DetailsSection from "~/modules/home/components/DetailsSection.vue";
import EducationSection from "~/modules/home/components/EducationSection.vue";
import CasesSection from "~/modules/home/components/CasesSection.vue";
import ContactsSection from "~/modules/home/components/ContactsSection.vue";

useHead({
	title: "Мальцева Ольга - Копірайтер",
	meta: [{name: "description", content: "Мальцева Ольга - Копірайтер"}],
});

onMounted(() => {
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-7Y5MQZJTYF');
});
</script>

<style lang="scss" scoped>

</style>
