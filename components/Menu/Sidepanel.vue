<template>
  <nav v-if="navItems?.length" class="border-r border-base-300">
    <MenuNavTree :nav-items="navItems" :add-menu-class="true" />
  </nav>
  <ErrorHandler v-else :error="errorMsg" />
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { ARTICLES_ROUTE_PATH } from "~/constants";

const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("docs", ["navTitle", "path"]).then(
    (items) => {
      return items
        .filter((item: ContentNavigationItem) =>
          item.path.includes(ARTICLES_ROUTE_PATH)
        )
        .at(0)?.children;
    }
  );
});
const { value: navItems } = data;
const errorMsg = "Oops! Something went wrong:";
</script>
