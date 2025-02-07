<template>
  <nav v-if="navItems?.length" class="border-r border-base-300">
    <NuxtLinkNavTree :nav-items="navItems" :add-menu-class="true" />
  </nav>
  <ErrorComponent v-else :error="errorMsg" />
</template>

<script setup lang="ts">
const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("docs", ["navTitle", "path"]).then((val) => {
    return val;
    //.map((item) => item.children)
    //.flat()
    //.filter((item) => (item?.navTitle || item?.tabTitle) && item?.path);
  });
});
const { value: navItems } = data;
console.log(`navItems= ${JSON.stringify(navItems)}`);
const errorMsg = "Oops! Something went wrong:";
</script>
