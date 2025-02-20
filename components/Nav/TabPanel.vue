<template>
  <div role="tablist" class="space-y-0 tabs tabs-boxed w-full max-w-9/10">
    <button
      v-for="item in navItems"
      :key="item.path"
      role="tab"
      :aria-selected="isActiveTab(item)"
      class="w-full ps-3 pe-3 indent-0 tab rounded-[5px]"
      :class="{ 'tab-active btn-active': isActiveTab(item) }"
      @click="navigateToPath(item)"
    >
      {{ item.navTitle ?? item.title }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { ref } from "vue";

const { navItems } = defineProps({
  navItems: { type: Array<ContentNavigationItem>, required: true },
});
const router = useRouter();
const { log } = useLogger();
const activeTab = ref("");

const isActiveTab = ({ path }: ContentNavigationItem) => {
  if (path === "/") {
    return activeTab.value === "/";
  }
  return activeTab.value.includes(path);
};

const setActiveTab = ({ path }: ContentNavigationItem) => {
  activeTab.value = path;
};

const navigateToPath = ({ path }: ContentNavigationItem) => {
  router.push(path);
};

//Set active tab logic
router.afterEach((to) => {
  log(LogLevel.DEBUG, "NavTabPanel afterEach", to.path);
  setActiveTab({ path: to.path } as ContentNavigationItem);
});
onMounted(() => {
  log(LogLevel.DEBUG, "NavTabPanel mounted");
  log(LogLevel.DEBUG, "Current path", router.currentRoute.value.path);

  setActiveTab({
    path: router.currentRoute.value.path,
  } as ContentNavigationItem);

  navItems.forEach((item) => {
    log(LogLevel.DEBUG, "NavTabPanel item", item);
    log(LogLevel.DEBUG, "NavTabPanel item path", item.path);
    log(LogLevel.DEBUG, "NavTabPanel item title", item.title);
    log(LogLevel.DEBUG, "NavTabPanel item active", isActiveTab(item));
  });
});
</script>
