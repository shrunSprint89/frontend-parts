<template>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>Home not found</div>
</template>

<script setup lang="ts">
const { data } = await usePageData();

useSeoMeta({
  ...data.value?.seo,
});
</script>
