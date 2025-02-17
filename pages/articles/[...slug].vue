<template>
  <section>
    <div v-if="status === 'pending'" class="flex justify-center w-full h-fit">
      <span class="loading loading-spinner loading-lg"></span>
    </div>
    <div v-else-if="error">Data not found</div>
    <ContentRenderer v-else-if="data" :value="data" />
  </section>
</template>

<script setup lang="ts">
const { log } = useLogger();
const slug = useRoute().params.slug;
log(LogLevel.DEBUG, "slug", slug);
const { data, status, error } = await usePageData();
</script>
