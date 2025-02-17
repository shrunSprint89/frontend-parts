<template>
  <nav class="navbar bg-base-200 w-full p-0">
    <div class="navbar-start ps-3">
      <label
        for="my-drawer"
        class="drawer-button btn btn-square btn-ghost text-base-content drop-shadow-md lg:hidden"
      >
        <MaterialSymbolsMenu class="inline h-6 w-6 text-base-400" />
      </label>
      <button
        class="hidden md:block btn btn-square btn-ghost text-base-content drop-shadow-md"
        @click="handlePrevious"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m3.55 12l7.35 7.35q.375.375.363.875t-.388.875t-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675T.825 12t.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388t.375.875t-.375.875z"
          />
        </svg>
      </button>
    </div>
    <div class="navbar-center w-9/12 md:w-6/12 lg:flex p-3">
      <PageContentSearchBar />
    </div>
    <div class="navbar-end pe-3">
      <button
        class="hidden md:block btn btn-square btn-ghost text-base-content drop-shadow-md"
        @click="handleNext"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
          />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import MaterialSymbolsMenu from "../Icons/MaterialSymbolsMenu.vue";

const router = useRouter();

const handleNext = () => {
  router.forward();
};

const handlePrevious = () => {
  router.back();
};
</script>
