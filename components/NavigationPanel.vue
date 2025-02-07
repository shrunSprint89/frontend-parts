<template>
  <nav class="navbar bg-base-200 w-full p-0">
    <div class="navbar-start ps-3">
      <button class="btn btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 3c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm9.707 13.293l-1.414 1.414L7.586 12l5.707-5.707l1.414 1.414L10.414 12z"
          ></path>
        </svg>
      </button>
    </div>
    <div class="navbar-center hidden lg:flex">
      <div class="form-control">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-4/5 md:w-auto"
        />
      </div>
    </div>
    <div class="navbar-end pe-3">
      <button class="btn btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2m6.293 2.707l1.414-1.414L16.414 12l-5.707 5.707l-1.414-1.414L13.586 12z"
          ></path>
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
