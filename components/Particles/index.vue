<template>
  <NuxtParticles
    id="tsparticles2"
    class="transition-all ease-in-out duration-5000 -z-10 overflow-clip w-full h-full absolute top-0 left-0"
    :options="options"
    :class="{
      visible: particlesLoaded,
      hidden: !particlesLoaded,
    }"
    @load="onLoad"
  />
</template>

<script setup lang="ts">
import type { Container } from "tsparticles-engine";
const particlesLoaded = ref(false);
const onLoad = (container: Container) => {
  particlesLoaded.value = true;
};
const options = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  background: {},
  particles: {
    move: {
      enable: true,
      random: true,
    },
    number: {
      value: 300,
    },
    life: {
      count: 20,
      duration: {
        value: 10,
      },
      delay: {
        value: 10,
      },
    },
    opacity: {
      value: {
        min: 0.05,
        max: 0.7,
      },
      animation: {
        enable: true,
        destroy: "min",
        speed: 0.5,
        startValue: "max",
        sync: false,
      },
    },
    shape: {
      type: "images",
      options: {
        images: [
          {
            src: "logos/angular-icon-svgrepo-com.svg",
          },
          {
            src: "logos/angularjs-svgrepo-com.svg",
          },
          {
            src: "logos/bootstrap-svgrepo-com.svg",
          },
          {
            src: "logos/javascript-svgrepo-com.svg",
          },
          {
            src: "logos/javascript-16-svgrepo-com.svg",
          },
          {
            src: "logos/typescript-16-svgrepo-com.svg",
          },
          {
            src: "logos/node-sass-svgrepo-com.svg",
          },
          {
            src: "logos/tailwindcss-svgrepo-com.svg",
          },
          {
            src: "logos/tailwindcss-icon-svgrepo-com.svg",
          },
          {
            src: "logos/babel-16-svgrepo-com.svg",
          },
          {
            src: "logos/babel-svgrepo-com.svg",
          },
          {
            src: "logos/backbone-icon-svgrepo-com.svg",
          },
          {
            src: "logos/bun-logo.svg",
          },
          {
            src: "logos/CSS_Logo.svg",
          },
          {
            src: "logos/cypress-svgrepo-com.svg",
          },
          {
            src: "logos/html-5-logo-svgrepo-com.svg",
          },
          {
            src: "logos/html-5-svgrepo-com.svg",
          },
          {
            src: "logos/jest-svgrepo-com.svg",
          },
          {
            src: "logos/jest-svgrepo-com_bw.svg",
          },
          {
            src: "logos/jquery-svgrepo-com.svg",
          },
          {
            src: "logos/reactivex-svgrepo-com.svg",
          },
          {
            src: "logos/react-svgrepo-com.svg",
          },
          {
            src: "logos/react-svgrepo-com_bw.svg",
          },
          {
            src: "logos/vitejs-svgrepo-com.svg",
          },
          {
            src: "logos/vue-16-svgrepo-com.svg",
          },
        ],
      },
    },
    size: {
      value: {
        min: 1,
        max: 30,
      },
      animation: {
        enable: true,
        speed: 10,
        startValue: "min",
        sync: false,
      },
    },
  },
};
</script>
