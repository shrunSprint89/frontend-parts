<template>
  <ul
    v-if="navItems"
    class="menu bg-base-300 h-full flex flex-col flex-nowrap overflow-y-scroll lg:mb-1"
    :class="tailwindcssClasses"
  >
    <li v-if="closeDrawerButton" class="lg:hidden">
      <div class="text-right" @click="closeDrawer">
        <MaterialSymbolsClose class="inline h-6 w-6 text-base-400" />
      </div>
    </li>
    <li v-for="item in navItems" :key="item.path">
      <details v-if="item.children">
        <summary>
          {{ item.navTitle ?? item.children.at(0)?.navTitle ?? item.title }}
        </summary>
        <MenuNavTree :nav-items="item.children" :add-menu-class="false" />
      </details>
      <NuxtLink
        v-else
        :to="item.path"
        class="grid place-items-center w-full h-full"
        @click="closeDrawer"
        >{{ item.navTitle ?? item.title ?? UNTITLED }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import MaterialSymbolsClose from "../Icons/MaterialSymbolsClose.vue";

const { navItems, closeDrawerButton } = defineProps({
  navItems: { type: Array<ContentNavigationItem>, required: true },
  closeDrawerButton: { type: Boolean, required: false },
});
const closeDrawer = inject<() => void>("closeDrawer");
const tailwindcssClasses: string = inject("tailwindcssClasses") ?? "";
</script>
