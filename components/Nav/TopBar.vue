<template>
  <nav
    class="flex flex-col items-center md:flex-row md:navbar bg-base-100 drop-shadow-md w-full"
  >
    <div class="w-fit md:w-1/2 md:navbar-start">
      <NuxtLink to="/" class="p-5">
        <NuxtImg src="logo_v1_big.png" class="w-24 md:w-40" />
      </NuxtLink>
    </div>
    <div class="md:navbar-center">
      <NavTabPanel v-if="navState.isReady" :nav-items="navState.nav" />

      <ErrorHandler v-else-if="navState?.isError" :error="errorMsg" />
      <div v-else class="flex justify-center">
        <span class="loading loading-spinner loading-lg"></span>
      </div>
    </div>
    <NavThemeSelector class="md:navbar-end" />
  </nav>
</template>

<script setup lang="ts">
const { navState } = useAppState();
const errorMsg = "Oops! Something went wrong:";
</script>
