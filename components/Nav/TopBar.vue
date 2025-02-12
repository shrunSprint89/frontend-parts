<template>
  <nav class="navbar bg-base-100 drop-shadow-md w-full">
    <div class="navbar-start">
      <NuxtLink to="/" class="p-5">
        <NuxtImg src="logo_v1_big.png" class="w-40" />
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <div class="p-4 pb-2 flex-col space-x-2">
        <IconsIcTwotoneColorLens class="inline h-6 w-6 text-base-400" />
        <select
          v-model="colorMode.preference"
          class="select hover:border-base-300 hover:border-2"
        >
          <option
            v-for="theme of themes"
            :key="theme.value"
            :value="theme.value"
          >
            {{ theme.name }}
          </option>
        </select>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { THEMES } from "@/constants";
const colorMode = useColorMode();
const themes = THEMES;
</script>
