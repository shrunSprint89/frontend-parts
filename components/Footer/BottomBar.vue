<template>
  <footer
    class="place-content-between items-center p-4 footer bg-base-200 from-base-100 drop-shadow md:sticky md:bottom-0"
    :class="tailwindcssClasses"
  >
    <aside class="items-center grid-flow-col">
      <p>Copyright © 2025 - Sharan Selvaraj - All right reserved</p>
    </aside>
    <nav
      class="flex flex-row gap-4 items-center justify-items-end place-items-end place-content-end"
    >
      <FooterTwitterIconWithLink href="https://x.com/shrunSpeak" />
      <FooterBuyMeCoffee />
      <FooterBuyMeChai />
    </nav>
  </footer>
</template>

<script setup lang="ts">
const tailwindcssClasses: string = inject("tailwindcssClasses") ?? "";
</script>
