<template>
  <span>Oops! Something went wrong: {{ error }} </span>
</template>

<script setup lang="ts">
const { error } = defineProps({
  error: { type: String, required: true },
});
</script>
