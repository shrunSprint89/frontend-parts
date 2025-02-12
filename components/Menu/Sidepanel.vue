<template>
  <nav v-if="navItems?.length" class="border-r border-base-300">
    <MenuNavTree :nav-items="navItems" :add-menu-class="true" />
  </nav>
  <ErrorHandler v-else :error="errorMsg" />
</template>

<script setup lang="ts">
const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("docs", ["navTitle", "path"]).then((val) => {
    return val;
  });
});
const { value: navItems } = data;
const errorMsg = "Oops! Something went wrong:";
</script>
