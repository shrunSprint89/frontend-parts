<template>
  <div role="tablist" class="tabs tabs-boxed w-full max-w-9/10">
    <button
      v-for="item in navItems"
      :key="item.TabTitle"
      role="tab"
      :class="{ tab: true, 'tab-active': isActiveTab(item.TabTitle) }"
      @click="setActiveTab(item.TabTitle)"
    >
      {{ item.TabTitle }}
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const navItems = [
  { TabTitle: "Home" },
  { TabTitle: "About" },
  { TabTitle: "Contact" },
];

const activeTabTitle = ref("About"); // This should be dynamically set based on your logic

const isActiveTab = (tabTitle) => {
  return tabTitle === activeTabTitle.value;
};

const setActiveTab = (tabTitle) => {
  activeTabTitle.value = tabTitle;
};
</script>

<style scoped>
.active {
  font-weight: bold;
}
</style>
