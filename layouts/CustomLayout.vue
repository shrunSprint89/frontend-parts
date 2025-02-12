<template>
  <div class="flex flex-col min-h-screen max-w-full p-4">
    <!-- Header -->
    <header class="w-full"><NavTopBar /></header>

    <!-- Main Content Area -->
    <div class="flex-grow flex flex-col md:flex-row flex-1">
      <MenuSidepanel class="flex-none w-full md:w-64 md:max-w-xs lg:w-96" />

      <!-- Main Content -->
      <PageContentPanel class="flex-1">
        <slot />
      </PageContentPanel>
    </div>
    <FooterBottomBar class="flex-3" />
  </div>
</template>
