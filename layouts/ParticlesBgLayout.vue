<template>
  <div class="">
    <Particles />
    <div class="min-h-screen max-w-full flex flex-col p-4">
      <!-- Header -->
      <header class="w-full"><NavTopBar /></header>

      <!-- Main Content Area -->
      <PageContentDrawerContainer class="flex-1">
        <slot />
      </PageContentDrawerContainer>
      <FooterBottomBar class="flex-3" />
    </div>
  </div>
</template>

<script setup lang="ts">
provide("tailwindcssClasses", "bg-opacity-80");
</script>
