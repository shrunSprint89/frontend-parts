<template>
  <section>
    <ContentRenderer v-if="data" :value="data" />
    <div v-else>Data not found</div>
  </section>
</template>

<script setup lang="ts">
const slug = useRoute().params.slug;
console.log(slug);
const data = await usePageData();
</script>

<style scoped>
/* Add any styles specific to the markdown content */
</style>
