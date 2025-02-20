<template>
  <nav
    class="flex flex-col items-center md:flex-row md:navbar bg-base-100 drop-shadow-md w-full"
    :class="tailwindcssClasses"
  >
    <div class="w-fit md:w-1/2 md:navbar-start">
      <Logo />
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
const tailwindcssClasses: string = inject("tailwindcssClasses") ?? "";
</script>
