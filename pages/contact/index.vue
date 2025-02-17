<template>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>Data not found</div>
</template>

<script setup lang="ts">
const { data } = await usePageData();

useSeoMeta({
  ...data.value?.seo,
});
</script>
