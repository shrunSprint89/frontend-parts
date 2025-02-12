<template>
  <div class="flex flex-col min-h-screen max-w-full p-4">
    <!-- Header -->
    <header class="w-full"><NavTopBar /></header>

    <!-- Main Content Area -->
    <div class="flex-grow flex flex-col md:flex-row flex-1">
      <MenuSidepanel class="flex-3" />

      <!-- Main Content -->
      <main class="flex-1">
        <PageContentPanel>
          <slot />
        </PageContentPanel>
      </main>
    </div>
    <FooterBottomBar class="flex-3" />
  </div>
</template>
