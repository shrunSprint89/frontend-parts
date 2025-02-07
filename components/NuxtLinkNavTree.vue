<template>
  <ul
    v-if="navItems"
    :class="{ 'menu bg-base-300 h-full lg:mb-1': addMenuClass }"
  >
    <li v-for="item in navItems" :key="item.path">
      <details v-if="item.children">
        <summary>{{ item.navTitle ?? item.title }}</summary>
        <!-- <ul class="z-10">
          <li v-for="child in item.children" :key="child.path">
            <NuxtLink :to="child.path">{{ child.navTitle }}</NuxtLink>
          </li>
        </ul> -->
        <NuxtLinkNavTree :nav-items="item.children" :add-menu-class="false" />
      </details>
      <button v-else>
        <NuxtLink :to="item.path">{{ item.navTitle ?? item.title }}</NuxtLink>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";

const { navItems } = defineProps({
  navItems: { type: Array<ContentNavigationItem>, required: true },
  addMenuClass: { type: Boolean, required: true },
});

console.log(navItems.flat());
</script>
