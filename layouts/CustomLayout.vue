<template>
  <div class="flex flex-col min-h-screen max-w-full p-4">
    <!-- Header -->
    <header class="w-full"><NavBar /></header>

    <!-- Main Content Area -->
    <div class="flex-grow flex flex-col md:flex-row flex-1">
      <MenuSidepanel class="flex-3" />

      <!-- Main Content -->
      <main class="flex-1 h-65 overflow-scroll">
        <ContentPanel>
          <slot />
        </ContentPanel>
      </main>
    </div>
    <Footer class="flex-3" />
  </div>
</template>
