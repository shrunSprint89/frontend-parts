<script setup lang="ts">
const home = await usePageData();

useSeoMeta({
  ...home.value?.seo,
});

/*

        title: Frontend.Parts - Comparitive overview of parts of frontend apps
description: Educational site that gives a comparitive overview of parts of frontend applications, and frontend engineering challenges and commonly used solutions.
date: 2023-03-20
image: https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60
alt: my first blog post
author:
  name: Peter
  bio: All about Peter and what he does and where he works
  img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags:
  - nuxtjs
  - javascript
keywords: "nuxt, seo, optimization"
ogTitle: "My Amazing Site"
ogDescription: "This is my amazing site, let me tell you all about it."
ogImage: "https://example.com/image.png"
twitterTitle: "My Amazing Site"
twitterImage: "https://example.com/image.png"
twitterCard: "summary_large_image"
*/
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
