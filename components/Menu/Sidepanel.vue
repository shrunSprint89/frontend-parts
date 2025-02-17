<template>
  <nav
    v-if="articlesNavState?.isReady"
    class="border-r border-base-300 h-full w-full md:w-1/2 lg:w-full"
  >
    <MenuNavTree
      :nav-items="articlesNavState.nav"
      :close-drawer-button="true"
    />
  </nav>
  <ErrorHandler v-else-if="articlesNavState?.isError" :error="errorMsg" />
  <div v-else class="flex justify-center">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</template>

<script setup lang="ts">
const { articlesNavState } = useAppState();
const errorMsg = "Oops! Something went wrong:";
</script>
