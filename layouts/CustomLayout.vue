<template>
  <div class="flex flex-col min-h-screen max-w-full p-4">
    <!-- Header -->
    <header class="w-full"><NavTopBar /></header>

    <!-- Main Content Area -->
    <PageContentDrawerContainer class="flex-1">
      <slot />
    </PageContentDrawerContainer>
    <FooterBottomBar class="flex-3" />
  </div>
</template>
