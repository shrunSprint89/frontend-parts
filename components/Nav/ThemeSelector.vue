<template>
  <div class="p-4 pb-2 flex-col md:flex-row space-x-2">
    <IconsIcTwotoneColorLens class="inline h-6 w-6 text-base-400" />
    <select
      v-model="colorMode.preference"
      class="select hover:border-base-300 hover:border-2"
    >
      <option v-for="theme of themes" :key="theme.value" :value="theme.value">
        {{ theme.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const themes = THEMES;
</script>
