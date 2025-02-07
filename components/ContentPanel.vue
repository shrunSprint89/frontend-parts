<template>
  <NavigationPanel />
  <div class="h-7/10 max-w-9/10 p-5 overflow-scroll">
    <!-- <select
      v-model="selectedPath"
      class="select w-full max-w-xs select-bordered"
      @change="handleSelectChange"
    >
      <option disabled selected value="default">Who shot first?</option>
      <option v-for="child in children" :key="child.path" :value="child.path">
        {{ child.navTitle }}
      </option>
    </select> -->
    <article>
      <slot />
    </article>
  </div>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const router = useRouter();
const { data } = await useNuxtData<ContentNavigationItem[] | null>(
  "navigation"
);
const { value: navItems } = data;
//console.log(`navItems= ${JSON.stringify(navItems)}`);
/* const { children } =
  navItems
    ?.filter((navItem) => navItem.path === router.currentRoute.value.path)
    .at(0) ?? {}; */

//console.log(`navItems filtered= ${JSON.stringify(children)}`);
const selectedPath = ref<string | null>("default");

const handleSelectChange = () => {
  if (selectedPath.value) {
    router.push(selectedPath.value);
  }
};

const children = ref<ContentNavigationItem[] | null>(null);

const updateChildren = () => {
  const currentPath = router.currentRoute.value.path;
  const currentNavItem = navItems?.find(
    (navItem) => navItem.path === currentPath
  );
  children.value = currentNavItem?.children ?? null;
};

watch(() => router.currentRoute.value.path, updateChildren);

updateChildren();
</script>
