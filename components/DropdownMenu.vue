<template>
  <div class="dropdown">
    <label tabindex="0" class="btn">Folders</label>
    <ul
      tabindex="-1"
      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li v-for="folder in folders" :key="folder.id">
        <a>{{ folder.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "DropdownMenu",
  props: {
    folders: Array,
  },
  setup(props) {
    return {
      folders: props.folders,
    };
  },
};
</script>
