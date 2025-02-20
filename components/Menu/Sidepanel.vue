<template>
  <nav
    v-if="navState.isReady"
    class="drop-shadow-sm h-full w-full md:w-1/2 lg:w-full"
    :class="{
      'display-none': navState.nav?.length === 0,
    }"
  >
    <MenuNavTree :nav-items="navState.nav" :close-drawer-button="true" />
  </nav>
  <ErrorHandler v-else-if="navState.isError" :error="errorMsg" />
  <div v-else class="flex justify-center align-middle w-full h-full">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
</template>

<script setup lang="ts">
const { articlesNavState, blogNavState, aboutNavState } = useAppState();
const { currentRoute } = useRouter();
const navState = computed(() => {
  if (currentRoute.value.path.includes(ABOUT_ROUTE_PATH)) {
    return toValue(aboutNavState);
  }
  if (currentRoute.value.path.includes(BLOG_ROUTE_PATH)) {
    return toValue(blogNavState);
  }
  if (
    currentRoute.value.path.includes(ARTICLES_ROUTE_PATH) ||
    currentRoute.value.path === HOME_ROUTE_PATH
  ) {
    return toValue(articlesNavState);
  }
  return {
    isReady: false,
    isError: false,
    nav: [],
  };
});

const errorMsg = "Oops! Something went wrong:";
</script>
