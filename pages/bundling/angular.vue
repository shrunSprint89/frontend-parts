<template>
  <ContentRenderer v-if="data" :value="data" />
  <div v-else>Data not found</div>
</template>

<script setup lang="ts">
const data = await usePageData();
</script>

<style scoped>
/* Add any styles specific to the markdown content */
</style>
