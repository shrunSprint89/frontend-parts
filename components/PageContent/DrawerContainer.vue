<template>
  <div class="drawer lg:drawer-open lg:grid-cols-9" @keydown.esc="closeDrawer">
    <input
      ref="drawerToggle"
      id="my-drawer"
      type="checkbox"
      class="drawer-toggle"
    />

    <div
      class="drawer-content lg:col-span-6 lg:col-start-4 xl:col-span-7 xl:col-start-3"
    >
      <!-- Main Content -->
      <PageContentPanel class="flex-1">
        <slot />
      </PageContentPanel>
    </div>

    <div
      class="drawer-side w-screen lg:w-full h-full z-10 lg:z-auto lg:col-span-3 lg:col-start-1 xl:col-span-2"
    >
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      />
      <MenuSidepanel />
    </div>
  </div>
</template>

<script setup lang="ts">
const { log } = useLogger();
const drawerToggle = ref<HTMLInputElement | null>(null);
const closeDrawer = () => {
  log(LogLevel.DEBUG, "close drawer", drawerToggle.value);
  if (!drawerToggle.value || !drawerToggle.value.checked) return;
  drawerToggle.value.checked = false;
};
provide("closeDrawer", closeDrawer);
</script>
