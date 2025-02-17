<template>
  <div
    ref="searchForm"
    class="form-control w-full relative"
    @keydown.esc="clearSearch"
    @keydown.down="handleArrowDown"
  >
    <input
      ref="searchInput"
      v-model="searchValue"
      type="text"
      placeholder="Search"
      class="input input-bordered indent-2 md:w-auto hover:drop-shadow-md"
      @input="debouncedHandleSearch"
    />
    <div
      class="collapse absolute top-14 left-0 drop-shadow-md"
      :class="{
        'collapse-open': searchFormFocused && result.length,
        'collapse-close': !result.length || !searchFormFocused,
      }"
    >
      <div
        class="collapse-content h-40 md:h-72 overflow-y-auto bg-base-100 rounded-md p-0 z-50"
      >
        <ul ref="resultsContainer" class="h-full rounded-md">
          <li v-for="link of result" :key="link.id" class="">
            <NuxtLink
              :to="link.id"
              class="w-full block mb-2 p-2 pl-4 pr-4 hover:bg-base-300"
              @click="clearSearch"
            >
              <strong>{{ link.title }}</strong>
              <p class="text-sm">
                {{ getFirstFewWords(link.content, 20) }}
              </p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SearchResult } from "minisearch";

const { miniSearch } = await useSearchContent();
const { searchValue, setSearchValue } = useAppState();
const { log } = useLogger();
let result = ref<SearchResult[]>([]);

const searchForm = ref();
const resultsContainer = ref<HTMLUListElement>();
const searchInput = ref<HTMLInputElement>();

const { focused: searchFormFocused } = useFocusWithin(searchForm);
const activeElement = useActiveElement();
const childrenAnchors = ref<HTMLElement[]>([]);
const handleSearch = () => {
  log(LogLevel.DEBUG, "Search value: ", searchValue);
  result = computed(() => miniSearch.search(toValue(searchValue)));
};

const clearSearch = () => {
  setSearchValue("");
  result = ref<SearchResult[]>([]);
};

const handleArrowDown = () => {
  log(LogLevel.DEBUG, "Arrow down");
  if (!resultsContainer.value) {
    return;
  }
  if (resultsContainer.value.children?.length > 0) {
    if (activeElement.value === searchInput.value) {
      childrenAnchors.value = Array.from(resultsContainer.value.children).map(
        (child) => child.querySelector("a")!
      );
      log(LogLevel.DEBUG, "Children anchors: ", childrenAnchors.value);
      //children.item(0)?.querySelector("a")?.focus();
      log(
        LogLevel.DEBUG,
        "Focus first child",
        childrenAnchors.value.at(0)?.textContent
      );
      childrenAnchors.value.at(0)?.focus();
    } else {
      /* 
      const parentElement = useParentElement(activeElement);
      const index = Array.from(children).indexOf(parentElement.value!);
      log(LogLevel.DEBUG, "Index of parent: ", index);
      if (index < children.length - 1) {
        log(
          LogLevel.DEBUG,
          "Focus next child",
          children.item(index + 1)?.querySelector("a")
        );
        children
          .item(index + 1)
          ?.querySelector("a")
          ?.focus();
      } */
      if (childrenAnchors.value.length > 0) {
        const index = childrenAnchors.value.indexOf(activeElement.value!);
        log(LogLevel.DEBUG, "Index of current active element: ", index);
        if (index < childrenAnchors.value.length - 1) {
          log(
            LogLevel.DEBUG,
            "Focus next child",
            childrenAnchors.value.at(index + 1)?.textContent
          );
          childrenAnchors.value.at(index + 1)?.focus();
        }
      }
    }
  }
};
const debouncedHandleSearch = useDebounceFn(handleSearch, 300);
</script>
