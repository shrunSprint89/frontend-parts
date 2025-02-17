<template>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else><ErrorHandler error="Data not found" /></div>
</template>

<script setup lang="ts">
const { data } = await usePageData();

useSeoMeta({
  ...data.value?.seo,
});
</script>
